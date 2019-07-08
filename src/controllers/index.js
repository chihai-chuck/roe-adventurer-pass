new Vue({
    el: ".adventurer-pass",
    data() {
        return {
            config: {
                quickNav: {
                    index: 0,
                    touching: false,
                    caption: {
                        "0": "F",
                        "10": "L"
                    }
                },
                titleHeight: 0
            },
            data: {
                prize: {
                    free: {
                        "2": {
                            name: "头像"
                        },
                        "4": {
                            name: "服装",
                            desc: "黑色毡绒帽"
                        },
                        "6": {
                            name: "服装",
                            desc: "紫色羽绒服"
                        },
                        "8": {
                            name: "服装",
                            desc: "雪地战术手套"
                        },
                        "10": {
                            name: "服装",
                            desc: "黑色衬衫"
                        },
                        "12": {
                            name: "服装",
                            desc: "金边镭射滑雪镜"
                        },
                        "14": {
                            name: "服装",
                            desc: "蓝色牛仔战术裤"
                        },
                        "16": {
                            name: "服装",
                            desc: "黑色马丁靴"
                        },
                        "18": {
                            name: "服装",
                            desc: "浅灰色高领内衣"
                        },
                        "20": {
                            name: "头像"
                        },
                        "22": {
                            name: "服装",
                            desc: "黑色毛皮一体夹克"
                        },
                        "24": {
                            name: "E币",
                            desc: "100E币"
                        },
                        "26": {
                            name: "服装",
                            desc: "深色牛仔裤"
                        },
                        "28": {
                            name: "服装",
                            desc: "黑色绒线帽"
                        },
                        "30": {
                            name: "移动工具",
                            desc: "滑翔翼"
                        },
                        "32": {
                            name: "服装",
                            desc: "灰色毡绒帽"
                        },
                        "34": {
                            name: "移动工具",
                            desc: "滑雪板"
                        },
                        "36": {
                            name: "服装",
                            desc: "黑色毛绒手套"
                        },
                        "38": {
                            name: "服装",
                            desc: "防尘口罩"
                        },
                        "40": {
                            name: "移动工具",
                            desc: "登山镐/滑轮"
                        },
                        "42": {
                            name: "服装",
                            desc: "黑色镭射滑雪镜"
                        },
                        "44": {
                            name: "服装",
                            desc: "蓝色毛衣开衫"
                        },
                        "46": {
                            name: "服装",
                            desc: "黑框板材眼镜"
                        },
                        "48": {
                            name: "服装",
                            desc: "黄色运动口罩"
                        },
                        "50": {
                            name: "背景音乐"
                        },
                        "52": {
                            name: "服装",
                            desc: "三色毛绒手套"
                        },
                        "54": {
                            name: "服装",
                            desc: "黄色雪地靴"
                        },
                        "56": {
                            name: "服装",
                            desc: "蓝灰毛绒手套"
                        },
                        "58": {
                            name: "服装",
                            desc: "军绿色羽绒服"
                        },
                        "60": {
                            name: "E币",
                            desc: "100E币"
                        },
                        "62": {
                            name: "服装",
                            desc: "蓝色高领毛衣"
                        },
                        "64": {
                            name: "头像"
                        },
                        "66": {
                            name: "服装",
                            desc: "深蓝棒球帽"
                        },
                        "68": {
                            name: "服装",
                            desc: "卡其休闲裤"
                        },
                        "70": {
                            name: "服装",
                            desc: "防毒面具"
                        }
                    },
                    fees: {
                        "1": [
                            {
                                name: "玲 摄影师",
                                desc: "为了拍摄一张满意的照片，玲经常将自己置于危险的环境，而为了捕捉一段转瞬即逝的光线，在镜头前全神贯注的一等就是好几个小时也是家常便饭。她甘之如饴。<br><br><span style='color:#e1ba89;'>“让我成为你的眼睛”</span><br><br><span style='color:#e1ba89;'>“一张满意的照片可以抵消为了拍摄它所经历的所有磨难。”</span>"
                            },
                            {
                                name: "加文 滑板先锋",
                                desc: "加文总是追逐着不同的极限体验，背着他的装\uFEFF备全世界冒险。对他而言，最刺激最有趣的冒险，总是下一个。<br><br><span style='color:#e1ba89;'>“风是我最好的盟友。”</span><br><br><span style='color:#e1ba89;'>“我不会对任何东西上瘾，除了冒险。”</span>"
                            }
                        ],
                        "2": {
                            name: "经验加成",
                            desc: "整个赛季，经验加成50%"
                        },
                        "3": {
                            name: "好友经验加成",
                            desc: "整个赛季，为队伍中的好友经验加成10%"
                        },
                        "4": {
                            name: "移动工具",
                            desc: "滑翔翼"
                        },
                        "5": {
                            name: "头像"
                        },
                        "6": {
                            name: "移动工具",
                            desc: "滑雪板"
                        },
                        "7": {
                            name: "经验值",
                            desc: "1000经验值"
                        },
                        "8": {
                            name: "移动工具",
                            desc: "登山镐/滑轮"
                        },
                        "9": {
                            name: "载入界面"
                        },
                        "10": {
                            name: "下赛季战阶+5"
                        },
                        "11": {
                            name: "头像"
                        },
                        "12": {
                            name: "经验加成",
                            desc: "整个赛季，经验加成10%"
                        },
                        "13": {
                            name: "背景音乐"
                        },
                        "14": {
                            name: "玲 摄影师 风格A",
                            desc: "为了拍摄一张满意的照片，玲经常将自己置于危险的环境，而为了捕捉一段转瞬即逝的光线，在镜头前全神贯注的一等就是好几个小时也是家常便饭。她甘之如饴。<br><br><span style='color:#e1ba89;'>“让我成为你的眼睛”</span><br><br><span style='color:#e1ba89;'>“一张满意的照片可以抵消为了拍摄它所经历的所有磨难。”</span>"
                        },
                        "15": {
                            name: "载入界面"
                        },
                        "16": {
                            name: "经验值",
                            desc: "1000经验值"
                        },
                        "17": {
                            name: "移动工具",
                            desc: "滑翔翼"
                        },
                        "18": {
                            name: "好友经验加成",
                            desc: "整个赛季，为队伍中的好友经验加成5%"
                        },
                        "19": {
                            name: "头像"
                        },
                        "20": {
                            name: "加文 滑板先锋 风格A",
                            desc: "加文总是追逐着不同的极限体验，背着他的装\uFEFF备全世界冒险。对他而言，最刺激最有趣的冒险，总是下一个。<br><br><span style='color:#e1ba89;'>“风是我最好的盟友。”</span><br><br><span style='color:#e1ba89;'>“我不会对任何东西上瘾，除了冒险。”</span>"
                        },
                        "21": {
                            name: "移动工具",
                            desc: "滑雪板"
                        },
                        "22": {
                            name: "头像"
                        },
                        "23": {
                            name: "经验值",
                            desc: "1000经验值"
                        },
                        "24": {
                            name: "经验加成",
                            desc: "整个赛季，经验加成10%"
                        },
                        "25": {
                            name: "E币",
                            desc: "100E币"
                        },
                        "26": {
                            name: "载入界面"
                        },
                        "27": {
                            name: "背景音乐"
                        },
                        "28": {
                            name: "移动工具",
                            desc: "滑翔翼"
                        },
                        "29": {
                            name: "头像"
                        },
                        "30": {
                            name: "玲 摄影师 风格B",
                            desc: "为了拍摄一张满意的照片，玲经常将自己置于危险的环境，而为了捕捉一段转瞬即逝的光线，在镜头前全神贯注的一等就是好几个小时也是家常便饭。她甘之如饴。<br><br><span style='color:#e1ba89;'>“让我成为你的眼睛”</span><br><br><span style='color:#e1ba89;'>“一张满意的照片可以抵消为了拍摄它所经历的所有磨难。”</span>"
                        },
                        "31": {
                            name: "载入界面"
                        },
                        "32": {
                            name: "经验加成",
                            desc: "整个赛季，经验加成10%"
                        },
                        "33": {
                            name: "移动工具",
                            desc: "滑雪板"
                        },
                        "34": {
                            name: "头像"
                        },
                        "35": {
                            name: "经验值",
                            desc: "1000经验值"
                        },
                        "36": {
                            name: "加文 滑板先锋 风格B",
                            desc: "加文总是追逐着不同的极限体验，背着他的装\uFEFF备全世界冒险。对他而言，最刺激最有趣的冒险，总是下一个。<br><br><span style='color:#e1ba89;'>“风是我最好的盟友。”</span><br><br><span style='color:#e1ba89;'>“我不会对任何东西上瘾，除了冒险。”</span>"
                        },
                        "37": {
                            name: "载入界面"
                        },
                        "38": {
                            name: "好友经验加成",
                            desc: "整个赛季，为队伍中的好友经验加成5%"
                        },
                        "39": {
                            name: "移动工具",
                            desc: "滑翔翼"
                        },
                        "40": {
                            name: "头像"
                        },
                        "41": {
                            name: "经验值",
                            desc: "1000经验值"
                        },
                        "42": {
                            name: "经验加成",
                            desc: "整个赛季，经验加成10%"
                        },
                        "43": {
                            name: "载入界面"
                        },
                        "44": {
                            name: "Hikage 黯影",
                            desc: "对于一些人而言，影是一个传奇，而对于另一些人而言，影是他们的噩梦。他捉摸不定，无声无息，像阴影之中一双永远注视你的眼睛。<br><br><span style='color:#e1ba89;'>“阳光照不到的地方，你也看不见影子。”</span><br><br><span style='color:#e1ba89;'>“人们不会歌颂已经已经陨落的传说。”</span>"
                        },
                        "45": {
                            name: "移动工具",
                            desc: "滑雪板"
                        },
                        "46": {
                            name: "载入界面"
                        },
                        "47": {
                            name: "背景音乐"
                        },
                        "48": {
                            name: "好友经验加成",
                            desc: "整个赛季，为队伍中的好友经验加成5%"
                        },
                        "49": {
                            name: "头像"
                        },
                        "50": {
                            name: "Hikage 黯影 风格A",
                            desc: "对于一些人而言，影是一个传奇，而对于另一些人而言，影是他们的噩梦。他捉摸不定，无声无息，像阴影之中一双永远注视你的眼睛。<br><br><span style='color:#e1ba89;'>“阳光照不到的地方，你也看不见影子。”</span><br><br><span style='color:#e1ba89;'>“人们不会歌颂已经已经陨落的传说。”</span>"
                        },
                        "51": {
                            name: "载入界面"
                        },
                        "52": {
                            name: "经验加成",
                            desc: "整个赛季，经验加成10%"
                        },
                        "53": {
                            name: "移动工具",
                            desc: "登山镐/滑轮"
                        },
                        "54": {
                            name: "头像"
                        },
                        "55": {
                            name: "Hikage 黯影 风格B",
                            desc: "对于一些人而言，影是一个传奇，而对于另一些人而言，影是他们的噩梦。他捉摸不定，无声无息，像阴影之中一双永远注视你的眼睛。<br><br><span style='color:#e1ba89;'>“阳光照不到的地方，你也看不见影子。”</span><br><br><span style='color:#e1ba89;'>“人们不会歌颂已经已经陨落的传说。”</span>"
                        },
                        "56": {
                            name: "经验值",
                            desc: "2000经验值"
                        },
                        "57": {
                            name: "载入界面"
                        },
                        "58": {
                            name: "好友经验加成",
                            desc: "整个赛季，为队伍中的好友经验加成5%"
                        },
                        "59": {
                            name: "移动工具",
                            desc: "滑翔翼"
                        },
                        "60": {
                            name: "玲 光影捕手",
                            desc: "为了拍摄一张满意的照片，玲经常将自己置于危险的环境，而为了捕捉一段转瞬即逝的光线，在镜头前全神贯注的一等就是好几个小时也是家常便饭。她甘之如饴。<br><br><span style='color:#e1ba89;'>“让我成为你的眼睛”</span><br><br><span style='color:#e1ba89;'>“一张满意的照片可以抵消为了拍摄它所经历的所有磨难。”</span>"
                        },
                        "61": {
                            name: "载入界面"
                        },
                        "62": {
                            name: "经验加成",
                            desc: "整个赛季，经验加成10%"
                        },
                        "63": {
                            name: "背景音乐"
                        },
                        "64": {
                            name: "经验值",
                            desc: "2000经验值"
                        },
                        "65": {
                            name: "玲 光影捕手 风格A",
                            desc: "为了拍摄一张满意的照片，玲经常将自己置于危险的环境，而为了捕捉一段转瞬即逝的光线，在镜头前全神贯注的一等就是好几个小时也是家常便饭。她甘之如饴。<br><br><span style='color:#e1ba89;'>“让我成为你的眼睛”</span><br><br><span style='color:#e1ba89;'>“一张满意的照片可以抵消为了拍摄它所经历的所有磨难。”</span>"
                        },
                        "66": {
                            name: "头像"
                        },
                        "67": {
                            name: "移动工具",
                            desc: "滑雪板"
                        },
                        "68": {
                            name: "好友经验加成",
                            desc: "整个赛季，为队伍中的好友经验加成5%"
                        },
                        "69": {
                            name: "载入界面"
                        },
                        "70": {
                            name: "加文 涂鸦达人",
                            desc: "加文总是追逐着不同的极限体验，背着他的装\uFEFF备全世界冒险。对他而言，最刺激最有趣的冒险，总是下一个。<br><br><span style='color:#e1ba89;'>“风是我最好的盟友。”</span><br><br><span style='color:#e1ba89;'>“我不会对任何东西上瘾，除了冒险。”</span>"
                        },
                        "71": {
                            name: "头像"
                        },
                        "72": {
                            name: "经验加成",
                            desc: "整个赛季，经验加成10%"
                        },
                        "73": {
                            name: "载入界面"
                        },
                        "74": {
                            name: "经验值",
                            desc: "2000经验值"
                        },
                        "75": {
                            name: "加文 涂鸦达人 风格A",
                            desc: "加文总是追逐着不同的极限体验，背着他的装\uFEFF备全世界冒险。对他而言，最刺激最有趣的冒险，总是下一个。<br><br><span style='color:#e1ba89;'>“风是我最好的盟友。”</span><br><br><span style='color:#e1ba89;'>“我不会对任何东西上瘾，除了冒险。”</span>"
                        },
                        "76": {
                            name: "移动工具",
                            desc: "登山镐/滑轮"
                        },
                        "77": {
                            name: "背景音乐"
                        },
                        "78": {
                            name: "经验加成",
                            desc: "整个赛季，经验加成10%"
                        },
                        "79": {
                            name: "E币",
                            desc: "100E币"
                        },
                        "80": {
                            name: "玲 光影捕手 风格B",
                            desc: "为了拍摄一张满意的照片，玲经常将自己置于危险的环境，而为了捕捉一段转瞬即逝的光线，在镜头前全神贯注的一等就是好几个小时也是家常便饭。她甘之如饴。<br><br><span style='color:#e1ba89;'>“让我成为你的眼睛”</span><br><br><span style='color:#e1ba89;'>“一张满意的照片可以抵消为了拍摄它所经历的所有磨难。”</span>"
                        },
                        "81": {
                            name: "载入界面"
                        },
                        "82": {
                            name: "好友经验加成",
                            desc: "整个赛季，为队伍中的好友经验加成5%"
                        },
                        "83": {
                            name: "移动工具",
                            desc: "滑翔翼"
                        },
                        "84": {
                            name: "经验值",
                            desc: "2000经验值"
                        },
                        "85": {
                            name: "加文 涂鸦达人 风格B",
                            desc: "加文总是追逐着不同的极限体验，背着他的装\uFEFF备全世界冒险。对他而言，最刺激最有趣的冒险，总是下一个。<br><br><span style='color:#e1ba89;'>“风是我最好的盟友。”</span><br><br><span style='color:#e1ba89;'>“我不会对任何东西上瘾，除了冒险。”</span>"
                        },
                        "86": {
                            name: "移动工具",
                            desc: "滑雪板"
                        },
                        "87": {
                            name: "载入界面"
                        },
                        "88": {
                            name: "经验加成",
                            desc: "整个赛季，经验加成10%"
                        },
                        "89": {
                            name: "背景音乐"
                        },
                        "90": {
                            name: "Hikage 白鸦",
                            desc: "对于一些人而言，影是一个传奇，而对于另一些人而言，影是他们的噩梦。他捉摸不定，无声无息，像阴影之中一双永远注视你的眼睛。<br><br><span style='color:#e1ba89;'>“阳光照不到的地方，你也看不见影子。”</span><br><br><span style='color:#e1ba89;'>“人们不会歌颂已经已经陨落的传说。”</span>"
                        },
                        "91": {
                            name: "头像"
                        },
                        "92": {
                            name: "经验值",
                            desc: "2000经验值"
                        },
                        "93": {
                            name: "载入界面"
                        },
                        "94": {
                            name: "移动工具",
                            desc: "滑翔翼"
                        },
                        "95": {
                            name: "Hikage 白鸦 风格A",
                            desc: "对于一些人而言，影是一个传奇，而对于另一些人而言，影是他们的噩梦。他捉摸不定，无声无息，像阴影之中一双永远注视你的眼睛。<br><br><span style='color:#e1ba89;'>“阳光照不到的地方，你也看不见影子。”</span><br><br><span style='color:#e1ba89;'>“人们不会歌颂已经已经陨落的传说。”</span>"
                        },
                        "96": {
                            name: "移动工具",
                            desc: "滑雪板"
                        },
                        "97": {
                            name: "背景音乐"
                        },
                        "98": {
                            name: "移动工具",
                            desc: "登山镐/滑轮"
                        },
                        "99": {
                            name: "经验加成",
                            desc: "整个赛季，经验加成10%"
                        },
                        "100": {
                            name: "Hikage 白鸦 风格B",
                            desc: "对于一些人而言，影是一个传奇，而对于另一些人而言，影是他们的噩梦。他捉摸不定，无声无息，像阴影之中一双永远注视你的眼睛。<br><br><span style='color:#e1ba89;'>“阳光照不到的地方，你也看不见影子。”</span><br><br><span style='color:#e1ba89;'>“人们不会歌颂已经已经陨落的传说。”</span>"
                        }
                    }
                },
                detail: {
                    image: "",
                    name: "",
                    desc: ""
                }
            },
            visible: {
                detail: false
            }
        }
    },
    mounted() {
        this.config.titleHeight = this.$refs.title.offsetHeight;
    },
    methods: {
        quickNavTouchMove(event) {
            this.config.quickNav.touching = true;
            const $quickNavFirstChildren = this.$refs.quickNav.firstElementChild;
            const index = Math.floor((event.changedTouches[0].clientY - $quickNavFirstChildren.offsetTop) / $quickNavFirstChildren.offsetHeight);
            if(index >= 0 && index <= 10) this.quickNavTouchActive(index);
        },
        quickNavTouchActive(index) {
            if(index !== this.config.quickNav.index) {
                this.config.quickNav.index = index;
                let jumpId = 1;
                if(index > 0) jumpId = index * 10;
                this.$refs.scroll.scrollTop = this.$refs.list.querySelector("#item" + jumpId).offsetTop - this.config.titleHeight;
            }
        },
        detailShow(type, index, arrayIndex) {
            if(type === 1 && index === 1 && arrayIndex === void 0) return;
            const prizeType = ["free", "fees"][type];
            if(arrayIndex !== void 0) {
                this.data.detail.image = `//cdn.max-c.com/wiki/755790/adventurer-pass-first-fees-${index-1}-${arrayIndex}.jpg?v=2`;
                this.data.detail.name = this.data.prize[prizeType][index][arrayIndex].name;
                this.data.detail.desc = this.data.prize[prizeType][index][arrayIndex].desc;
            } else {
                this.data.detail.image = `//cdn.max-c.com/wiki/755790/adventurer-pass-first-${prizeType}-${index-1}.jpg?v=2`;
                this.data.detail.name = this.data.prize[prizeType][index].name;
                this.data.detail.desc = this.data.prize[prizeType][index].desc;
            }
            this.visible.detail = true;
        },
        popupTouch(event) {
            event.stopPropagation();
            if(event.target === this.$refs.popup || event.target === this.$refs.popupContent) {
                this.visible.detail = false;
            }
        }
    }
});