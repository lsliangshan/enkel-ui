<template>
  <button class="button"
          :class="classes"
          :type="type">
    <slot></slot>
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
  import { oneOf } from '../../utils/assist';
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
        validator (value) {
          return oneOf(value || 'button', ['button', 'submit', 'reset']);
        },
        default: 'button'
      },
      fill: {
        type: Boolean,
        default: true
      },

      shape: {
        validator (value) {
          return oneOf(value, ['circle', 'circle-outline']);
        }
      },
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large', 'default']);
        },
        default () {
          return !this.$enkel || this.$enkel.size === '' ? 'default' : this.$enkel.size;
        }
      },
      loading: Boolean,
      disabled: Boolean,
      htmlType: {
        default: 'button',
        validator (value) {
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
    data () {
      return {
        showSlot: true,
        ripples: {},
        count: 0
      };
    },
    computed: {
      classes () {
        return [
          {
            ['button-fill']: this.fill,
            ['button-round']: this.round
          }
        ]
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

    },
    mounted () {
    }
  };
</script>
