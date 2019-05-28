<template>
    <button
        :class="classes"
        :type="htmlType"
        :disabled="disabled"
        @click="btnClickHandler"
    >
        <Icon class="enkel-load-loop" type="ios-loading" v-if="loading"></Icon>
        <Icon :type="icon" :custom="customIcon" v-if="(icon || customIcon) && !loading"></Icon>
        <!--<span>-->
          <slot></slot>
        <!--</span>-->
        <component v-for="(v, k) in ripples" :key="k" v-if="ripple" :id="k" :rect="v.rect" :is="v.component"
                   :data-id="k" @end="removeRipple"></component>
    </button>
</template>
<style scoped>
    .enkel-btn {
        position: relative;
        overflow: hidden;
    }

    .enkel-btn.custom-active:active {
        opacity: 0.7;
    }

    .enkel-btn * {
        pointer-events: none;
    }
</style>
<script>
    import Icon from '../icon';
    import Ripple from '../ripple';
    import {oneOf} from '../../utils/assist';
    import mixinsLink from '../../mixins/link';
    import tinycolor from 'tinycolor2';

    const prefixCls = 'enkel-btn';

    export default {
        name: 'Button',
        mixins: [mixinsLink],
        components: {
            Icon,
            Ripple
        },
        props: {
            type: {
                validator(value) {
                    return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
                },
                default: 'default'
            },
            shape: {
                validator(value) {
                    return oneOf(value, ['circle', 'circle-outline']);
                }
            },
            size: {
                validator(value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default() {
                    return !this.$enkel || this.$enkel.size === '' ? 'default' : this.$enkel.size;
                }
            },
            loading: Boolean,
            disabled: Boolean,
            htmlType: {
                default: 'button',
                validator(value) {
                    return oneOf(value, ['button', 'submit', 'reset']);
                }
            },
            icon: {
                type: String,
                default: ''
            },
            customIcon: {
                type: String,
                default: ''
            },
            long: {
                type: Boolean,
                default: false
            },
            ghost: {
                type: Boolean,
                default: false
            },
            ripple: {
                type: [Boolean, String],
                default: true
            }
        },
        data() {
            return {
                showSlot: true,
                ripples: {},
                count: 0
            };
        },
        computed: {
            classes() {
                if (!this.ripple) {
                    return [
                        'custom-active',
                        `${prefixCls}`,
                        `${prefixCls}-${this.type}`,
                        {
                            [`${prefixCls}-long`]: this.long,
                            [`${prefixCls}-${this.shape}`]: !!this.shape,
                            [`${prefixCls}-${this.size}`]: this.size !== 'default',
                            [`${prefixCls}-loading`]: this.loading != null && this.loading,
                            [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
                            [`${prefixCls}-ghost`]: this.ghost
                        }
                    ];
                }
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.type}`,
                    {
                        [`${prefixCls}-long`]: this.long,
                        [`${prefixCls}-${this.shape}`]: !!this.shape,
                        [`${prefixCls}-${this.size}`]: this.size !== 'default',
                        [`${prefixCls}-loading`]: this.loading != null && this.loading,
                        [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
                        [`${prefixCls}-ghost`]: this.ghost
                    }
                ];
            }
        },
        methods: {
            // Ctrl or CMD and click, open in new window when use `to`
            handleClickLink(event, new_window = false) {
                this.$emit('click', event);

                this.handleCheckClick(event, new_window);
            },
            btnClickHandler(evt) {
                evt.preventDefault();
                let _ripples = JSON.parse(JSON.stringify(this.ripples));
                let computedTarget = getComputedStyle(evt.target);
                let forcedRippleColor = '';
                if (this.ripple && tinycolor(this.ripple).isValid()) {
                    forcedRippleColor = this.ripple;
                }
                _ripples['ripple-' + this.count] = {
                    component: 'ripple',
                    rect: {
                        clientX: evt.clientX,
                        clientY: evt.clientY,
                        touches: evt.touches || [],
                        target: {
                            width: evt.target.clientWidth,
                            height: evt.target.clientHeight,
                            left: evt.target.offsetLeft,
                            top: evt.target.offsetTop,
                            bgColor: computedTarget.backgroundColor || '#000000',
                            borderColor: computedTarget.borderColor,
                            color: computedTarget.color,
                            rippleColor: forcedRippleColor
                        }
                    }
                };
                this.ripples = JSON.parse(JSON.stringify(_ripples));
                this.count += 1;
            },
            removeRipple(e) {
                let _ripples = JSON.parse(JSON.stringify(this.ripples));
                if (_ripples.hasOwnProperty(e.id)) {
                    delete _ripples[e.id];
                }
                this.ripples = JSON.parse(JSON.stringify(_ripples));
            }
        },
        mounted() {
        }
    };
</script>
