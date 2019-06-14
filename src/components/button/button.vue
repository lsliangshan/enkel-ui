<template>
  <button class="button"
          :class="classes"
          :style="styles"
          @click="clickHandler">
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
  .enkel-button .button_inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .enkel-button .button_inner .button_loading {
    margin-right: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .enkel-button .button_inner .button_loading i {
    font-size: 14px;
  }
</style>
<script>
  import { oneOf } from '../../utils/assist';

  const prefixCls = 'enkel-button';

  export default {
    name: 'Button',
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['default', 'primary', 'error', 'info', 'warning', 'red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple', 'deeppurple', 'lightblue', 'teal', 'lime', 'deeporange', 'gray', 'white', 'black']);
        },
        default: 'default'
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
      rippleColor: {
        type: String,
        validator (value) {
          return oneOf(value, ['primary', 'error', 'info', 'warning', 'red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple', 'deeppurple', 'lightblue', 'teal', 'lime', 'deeporange', 'gray', 'white', 'black']);
        }
      },
      noRipple: {
        type: Boolean,
        default: false
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
      classes () {
        return [
          `${prefixCls}`,
          {
            ['button-fill']: this.fill && !this.outline,
            ['button-round']: this.round,
            [`button-${this.size}`]: (this.size !== 'default'),
            ['button-raised']: this.raised,
            ['button-outline']: this.outline,
            ['button-round']: this.round,
            ['text-color-black']: (this.cType === 'white'),
            [`text-color-${this.textColor}`]: (this.textColor !== 'primary'),
            [`border-color-${this.borderColor}`]: (this.borderColor !== 'primary'),
            [`color-theme-${(this.cType !== 'default') ? this.cType : this.$enkel.colorTheme}`]: ((this.cType !== 'default') || this.$enkel.colorTheme),
            ['no-ripple']: this.noRipple
          }
        ]
      },
      styles () {
        let styles = {}
        if (this.rippleColor) {
          styles['--f7-touch-ripple-color'] = this.rippleColor
        }
        return styles
      }
    },
    methods: {
      clickHandler (e) {
        this.$emit('click', e)
      }
    },
    mounted () {
    }
  };
</script>
