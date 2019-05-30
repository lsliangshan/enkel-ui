<template>
  <button class="button color-theme-white"
          :class="classes">
    <div class="button_inner">
      <div class="button_loading"
           v-if="loading">
        <slot name="loading">
          <Preloader size="14"
                     color="white"></Preloader>
        </slot>
      </div>
      <slot></slot>
    </div>
  </button>
</template>
<style scoped>
  .enkel-btn .button_inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .enkel-btn .button_inner .button_loading {
    margin-right: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .enkel-btn .button_inner .button_loading i {
    font-size: 14px;
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
          return oneOf(value, ['primary', 'error', 'info', 'warning', 'red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple', 'deeppurple', 'lightblue', 'teal', 'lime', 'deeporange', 'gray', 'white', 'black']);
        },
        default: 'primary'
      },
      fill: {
        type: Boolean,
        default: false
      },
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large', 'default']);
        },
        default: 'default'
      },
      raised: {
        type: [Boolean, String],
        default: false
      },
      outline: {
        type: [Boolean, String],
        default: false
      },
      round: {
        type: [Boolean, String],
        default: false
      },
      textColor: {
        validator (value) {
          return oneOf(value, ['primary', 'error', 'info', 'warning', 'red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple', 'deeppurple', 'lightblue', 'teal', 'lime', 'deeporange', 'gray', 'white', 'black']);
        },
        default: 'primary'
      },
      borderColor: {
        validator (value) {
          return oneOf(value || 'primary', ['primary', 'error', 'info', 'warning', 'red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple', 'deeppurple', 'lightblue', 'teal', 'lime', 'deeporange', 'gray', 'white', 'black']);
        },
        default: 'primary'
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
      cType () {
        let type = this.type
        switch (type) {
          case 'primary':
            type = 'blue'
            break
          case 'error':
            type = 'red'
            break
          case 'info':
            type = 'lightblue'
            break
          case 'warning':
            type = 'orange'
            break
          default:
            break
        }
        return type
      },
      cTextColor () {
        let type = this.type
        switch (type) {
          case 'primary':
            type = 'blue'
            break
          case 'error':
            type = 'red'
            break
          case 'info':
            type = 'lightblue'
            break
          case 'warning':
            type = 'orange'
            break
          default:
            break
        }
        return type
      },
      classes () {
        return [
          `${prefixCls}`,
          `color-${this.cType}`,
          {
            ['button-fill']: this.fill && !this.outline,
            ['button-round']: this.round,
            [`button-${this.size}`]: (this.size !== 'default'),
            ['button-raised']: this.raised,
            ['button-outline']: this.outline,
            ['button-round']: this.round,
            ['text-color-black']: (this.cType === 'white'),
            [`text-color-${this.textColor}`]: (this.textColor !== 'primary'),
            [`border-color-${this.borderColor}`]: (this.borderColor !== 'primary')
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
