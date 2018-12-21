const gulp = require('gulp'),
    clean = require('gulp-clean'),
    replace = require('gulp-replace'),
    less = require('gulp-less'),
    htmlmin = require('gulp-htmlmin'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    csso = require('gulp-csso'),
    postcss = require('gulp-postcss'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    base64 = require('gulp-base64'),
    cheerio = require('gulp-cheerio'),
    order = require('gulp-order');

gulp.task('build', ['clean'], () => {
    gulp.start('replace');
});

gulp.task('clean', () => {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('replace', ['build:rev'], () => {
    setTimeout(() => {
        gulp.start(['replace:css', 'replace:js', 'replace:html']);
    }, 1000);
});

gulp.task('build:lib', () => {
    return gulp.src('./src/controllers/lib/**/*.*')
        .pipe(gulp.dest('./dist/controllers/lib'))
});

gulp.task('build:js', ['build:lib'], () => {
    return gulp.src(['./src/controllers/**/*.js', '!./src/controllers/lib/*.js'])
        .pipe(babel({
            babelrc: false,
            presets: ['env', 'stage-0']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/controllers'))
});

gulp.task('build:less', () => {
    return gulp.src('./src/styles/*.less')
        .pipe(less())
        .pipe(base64({
            maxImageSize: 10240
        }))
        .pipe(postcss([
            require('postcss-short'),
            require('postcss-cssnext')
        ]))
        .pipe(csso())
        .pipe(gulp.dest('./dist/styles'))
});

gulp.task('build:image', () => {
    return gulp.src('./src/assets/images/**/*.*(png|jpg|jpeg|gif|svg|webp)')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('./dist/images'))
});

gulp.task('build:html', () => {
    return gulp.src('./src/pages/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build:font', () => {
    return gulp.src('./src/assets/fonts/*.*(woff2?|eot|ttf|otf)')
        .pipe(gulp.dest('./dist/fonts'))
});

gulp.task('build:rev', ['build:image', 'build:less', 'build:js', 'build:html', 'build:font'], () => {
    return gulp.src('./dist/**/*.*(html|js|css)')
        .pipe(replace('.less', '.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('replace:html', () => {
    return gulp.src('./dist/**/*.html')
        .pipe(replace('../assets/images', 'images'))
        .pipe(replace('../assets/fonts', 'fonts'))
        .pipe(cheerio($ => {
            $("script").remove();
            $("link").remove();
            $("head").append("<link rel='stylesheet' href='./main.css'>");
            $("body").append("<script src='./main.js'></script>");
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('replace:css', ['clean:css'], () => {
    return gulp.src('./dist/styles/**/*.css')
        .pipe(replace('../assets/images', './images'))
        .pipe(replace('../assets/fonts', './fonts'))
        .pipe(concat('main.css'))
        .pipe(replace('\n', ''))
        .pipe(gulp.dest('./dist'));
});

gulp.task('replace:js', ['clean:js'], () => {
    return gulp.src('./dist/controllers/**/*.js')
        .pipe(order([
            "lib/*.js",
            "*.js"
        ]))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('clean:js', () => {
    gulp.src('./dist/controllers', {read: false})
        .pipe(clean());
});
gulp.task('clean:css', () => {
    gulp.src('./dist/styles', {read: false})
        .pipe(clean());
});