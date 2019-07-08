new Vue({
    el: ".adventurer-pass",
    data() {
        return {
            config: {
                version: "{{replace-version}}",
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
                prize: "{{replace-data}}",
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
    computed: {
        imgVersion() {
            return this.config.version === "s1" ? "first" : this.config.version;
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
                this.data.detail.image = `//cdn.max-c.com/wiki/755790/adventurer-pass-${this.imgVersion}-fees-${index-1}-${arrayIndex}.jpg?v=99`;
                this.data.detail.name = this.data.prize[prizeType][index][arrayIndex].name;
                this.data.detail.desc = this.data.prize[prizeType][index][arrayIndex].desc;
            } else {
                this.data.detail.image = `//cdn.max-c.com/wiki/755790/adventurer-pass-${this.imgVersion}-${prizeType}-${index-1}.jpg?v=99`;
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