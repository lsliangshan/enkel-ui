<template>
    <i :class="classes" :style="styles" @click="handleClick" v-if="!svg"></i>
    <svg v-else :class="classes" :style="svgStyles" @click="handleClick">
        <use :xlink:href="'#' + svg" :style="pathStyles"></use>
    </svg>
</template>
<script>
    const prefixCls = 'enkel-icon';

    export default {
        name: 'Icon',
        props: {
            type: {
                type: String,
                default: ''
            },
            size: [Number, String],
            color: String,
            custom: {
                type: String,
                default: ''
            },
            svg: {
                type: String,
                default: ''
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: this.type !== '',
                        [`${this.custom}`]: this.custom !== '',
                    }
                ];
            },
            styles () {
                let style = {};

                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }

                if (this.color) {
                    style.color = this.color;
                }

                return style;
            },
            svgStyles () {
                let style = {};

                if (this.size) {
                    style['width'] = `${this.size}px`;
                    style['height'] = `${this.size}px`;
                }

                return style;
            },
            pathStyles () {
                let style = {};

                if (this.color) {
                    style['fill'] = this.color;
                }

                return style;
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        }
    };
</script>
