<template>
    <div class="enkel-ripple" :class="classes" :style="[styles, {'background-color': realBgColor}]"></div>
</template>
<style scoped>
    @keyframes ripple-enter {
        0% {
            -webkit-transform: scale(0);
            -moz-transform: scale(0);
            -ms-transform: scale(0);
            -o-transform: scale(0);
            transform: scale(0);
            opacity: 0.1;
        }
        100% {
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);
            opacity: 0.3;
        }
    }

    @keyframes ripple-exit {
        0% {
            opacity: .3;
        }
        100% {
            opacity: 0;
        }
    }

    .enkel-ripple {
        position: absolute;
        width: 50px;
        height: 50px;
        left: 0;
        top: 0;
        opacity: 0;
        border-radius: 50%;
    }

    .enkel-ripple-visible {
        -webkit-animation: ripple-enter 550ms ease-in-out;
        -o-animation: ripple-enter 550ms ease-in-out;
        animation: ripple-enter 550ms ease-in-out;
        animation-fill-mode: forwards;
    }

    .enkel-ripple-exit {
        /*opacity: 0.3;*/
        /*-webkit-transition: opacity .5s ease-in-out;*/
        /*-moz-transition: opacity .5s ease-in-out;*/
        /*-ms-transition: opacity .5s ease-in-out;*/
        /*-o-transition: opacity .5s ease-in-out;*/
        /*transition: opacity .5s ease-in-out;*/
        -webkit-animation: ripple-exit 300ms ease-in-out;
        /*-o-animation: ripple-exit 100ms ease-in-out;*/
        /*animation: ripple-exit 100ms ease-in-out;*/
        /*transform-origin: center center;*/
    }
</style>
<script>
    import tinycolor from 'tinycolor2';

    export default {
        props: {
            id: {
                type: String
            },
            rect: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data() {
            return {
                width: 50,
                height: 50,
                styles: {
                    width: '50px',
                    height: '50px'
                },
                classes: []
            };
        },
        computed: {
            realBgColor () {
                let rippleColor = this.rect.target.rippleColor;
                if (rippleColor) {
                    return rippleColor;
                }
                let bgColor = this.rect.target.bgColor;
                let borderColor = this.rect.target.borderColor;
                if (tinycolor(bgColor).isDark()) {
                    return '#FFFFFF';
                } else {
                    if (tinycolor(borderColor).isDark() && tinycolor(borderColor).getAlpha() > 0.1) {
                        return borderColor;
                    } else {
                        return this.rect.target.color;
                    }
                }
            }
        },
        created() {
            this.$nextTick(() => {
                this.start();
            });
        },
        methods: {
            start() {
                let rippleSize = Math.max(this.rect.target.width, this.rect.target.height) * 2.2;
                let rippleX = this.rect.clientX - this.rect.target.left - rippleSize / 2 + window.pageXOffset;
                let rippleY = this.rect.clientY - this.rect.target.top - rippleSize / 2 + window.pageYOffset;
                this.styles = {
                    width: rippleSize + 'px',
                    height: rippleSize + 'px',
                    left: rippleX + 'px',
                    top: rippleY + 'px'
                };
                this.classes.push('enkel-ripple-visible')
                setTimeout(() => {
                    this.stop(() => {
                        this.$emit('end', {
                            id: this.id
                        });
                    });
                }, 500);
            },
            stop(cb) {
                this.classes.push('enkel-ripple-exit')
                setTimeout(() => {
                    cb();
                }, 300);
            },
            getColor() {
                let bgColor = this.rect.target.bgColor;
                let borderColor = this.rect.target.borderColor;
                if (tinycolor(bgColor).isDark()) {
                    return '#FFFFFF';
                } else {
                    if (tinycolor(borderColor).isDark()) {
                        return borderColor;
                    } else {
                        return this.rect.target.color;
                    }
                }
            }
        },
        components: {}
    };
</script>
