const gulp = require('gulp'),
    gulpif = require('gulp-if'),
    clean = require('gulp-clean'),
    replace = require('gulp-replace'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    less = require('gulp-less'),
    htmlMinify = require('gulp-html-minify'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    csso = require('gulp-csso'),
    postcss = require('gulp-postcss'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    base64 = require('gulp-base64'),
    webserver = require('gulp-webserver'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    gzip = require('gulp-gzip');

let env = '', path = '';

gulp.task('dev', () => {
    env = 'development';
    path = 'dev';
    gulp.src('./dev')
        .pipe(webserver({
            livereload: true,
            open: false,
            host: "0.0.0.0",
            port: 55101
        }));
    gulp.start(['replace', 'watch']);
});

gulp.task('build', ['clean'], () => {
    env = 'production';
    path = 'dist';
    gulp.start('replace');
});

gulp.task('clean', () => {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*', ['replace']);
    livereload.listen();
    gulp.watch([`./${path}/**/*`]).on('change', livereload.changed);
});

gulp.task('replace', ['build:rev'], () => {
    setTimeout(() => {
        gulp.start(['replace:css', 'replace:html']);
    }, 1000);

    gulp.src('./dist/manifest', {read: false})
        .pipe(clean());
});

gulp.task('build:lib', () => {
    return gulp.src('./src/controllers/lib/**/*.*')
        .pipe(gulpif(env === 'development', sourcemaps.init()))
        .pipe(gulpif(env === 'production', rev()))
        .pipe(gulpif(env === 'development', sourcemaps.write()))
        /*.pipe(gulpif(env === 'production', gzip({
            threshold: 1024,
            skipGrowingFiles: true,
            deleteMode: `./${path}/controllers`
        })))*/
        .pipe(gulp.dest(`./${path}/controllers/lib`))
        .pipe(gulpif(env === 'production', rev.manifest('controllers.json')))
        .pipe(gulpif(env === 'production', gulp.dest(`./${path}/manifest`)));
});

gulp.task('build:js', ['build:lib'], () => {
    return gulp.src(['./src/controllers/**/*.js', '!./src/controllers/lib/*.js'])
        .pipe(gulpif(env === 'production', replace('/api/', '/'))) // 修改正式包的api地址前缀，实际服务器中不需要
        .pipe(gulpif(env === 'development', sourcemaps.init()))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulpif(env === 'production', rev()))
        .pipe(gulpif(env === 'development', sourcemaps.write()))
        /*.pipe(gulpif(env === 'production', gzip({
            threshold: 1024,
            skipGrowingFiles: true,
            deleteMode: `./${path}/controllers`
        })))*/
        .pipe(gulp.dest(`./${path}/controllers`))
        .pipe(gulpif(env === 'production', rev.manifest('controllers.json')))
        .pipe(gulpif(env === 'production', gulp.dest(`./${path}/manifest`)));
});

gulp.task('build:less', () => {
    return gulp.src('./src/styles/*.less')
        .pipe(gulpif(env === 'development', sourcemaps.init()))
        .pipe(less())
        .pipe(base64({
            maxImageSize: 20480
        }))
        .pipe(postcss([
            require('postcss-short'),
            require('postcss-cssnext')
        ]))
        .pipe(csso())
        .pipe(gulpif(env === 'production', rev()))
        .pipe(gulpif(env === 'development', sourcemaps.write()))
        .pipe(gulp.dest(`./${path}/styles`))
        .pipe(gulpif(env === 'production', rev.manifest('styles.json')))
        .pipe(gulpif(env === 'production', gulp.dest(`./${path}/manifest`)));
});

gulp.task('build:image', () => {
    return gulp.src('./src/assets/images/**/*.*(png|jpg|jpeg|gif|svg|webp)')
        .pipe(cache(imagemin()))
        .pipe(gulpif(env === 'production', rev()))
        .pipe(gulp.dest(`./${path}/images`))
        .pipe(gulpif(env === 'production', rev.manifest('images.json')))
        .pipe(gulpif(env === 'production', gulp.dest(`./${path}/manifest`)));
});

gulp.task('build:html', () => {
    return gulp.src('./src/pages/*.html')
        .pipe(gulpif(env === 'development', sourcemaps.init()))
        .pipe(htmlMinify())
        .pipe(gulpif(env === 'development', sourcemaps.write()))
        .pipe(gulp.dest(`./${path}`));
});

gulp.task('build:font', () => {
    return gulp.src('./src/assets/fonts/*.*(woff2?|eot|ttf|otf)')
        .pipe(gulp.dest(`./${path}/fonts`))
        .pipe(gulpif(env === 'production', rev.manifest('fonts.json')))
        .pipe(gulpif(env === 'production', gulp.dest(`./${path}/manifest`)));
});

gulp.task('build:rev', ['build:image', 'build:less', 'build:js', 'build:html', 'build:font'], () => {
    return gulp.src([`./${path}/manifest/**/*.json`, `./${path}/**/*.*(html|js|css)`])
        .pipe(replace('.less', '.css'))
        .pipe(gulpif(env === 'production', revCollector({
            replaceReved: true
        })))
        .pipe(gulp.dest(`./${path}`));
});

gulp.task('replace:html', () => {
    return gulp.src(`./${path}/**/*.html`)
        .pipe(replace('../styles', 'styles'))
        .pipe(replace('../controllers', 'controllers'))
        .pipe(replace('../assets/images', 'images'))
        .pipe(replace('../assets/fonts', 'fonts'))
        .pipe(gulpif(env === 'production', replace('/dist/san.dev.js', ''))) // SAN在发布生产版本时需替换为生产版本包
        .pipe(gulp.dest(`./${path}`));
});

gulp.task('replace:css', () => {
    return gulp.src(`./${path}/styles/**/*.css`)
        .pipe(replace('../assets/images', '../images'))
        .pipe(replace('../assets/fonts', '../fonts'))
        .pipe(gulp.dest(`./${path}/styles`));
});


