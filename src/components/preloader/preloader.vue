<template>
  <div class="preloader-container">
    <div class="preloader"
         :class="classes"
         :style="styles"
         v-if="$enkel.theme === 'md'">
      <span class="preloader-inner">
        <span class="preloader-inner-gap"></span>
        <span class="preloader-inner-left">
          <span class="preloader-inner-half-circle"></span>
        </span>
        <span class="preloader-inner-right">
          <span class="preloader-inner-half-circle"></span>
        </span>
      </span>
    </div>
    <div class="preloader"
         :class="classes"
         :style="styles"
         v-else-if="$enkel.theme === 'ios'">
      <span class="preloader-inner">
        <span class="preloader-inner-line"></span>
        <span class="preloader-inner-line"></span>
        <span class="preloader-inner-line"></span>
        <span class="preloader-inner-line"></span>
        <span class="preloader-inner-line"></span>
        <span class="preloader-inner-line"></span>
        <span class="preloader-inner-line"></span>
        <span class="preloader-inner-line"></span>
        <span class="preloader-inner-line"></span>
        <span class="preloader-inner-line"></span>
        <span class="preloader-inner-line"></span>
        <span class="preloader-inner-line"></span>
      </span>
    </div>
  </div>
</template>
<script>
  import { oneOf } from '../../utils/assist';
  const prefixCls = 'enkel-icon';

  export default {
    name: 'Icon',
    props: {
      color: {
        validator (value) {
          return oneOf(value, ['multi', 'default', 'primary', 'error', 'info', 'warning', 'red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple', 'deeppurple', 'lightblue', 'teal', 'lime', 'deeporange', 'gray', 'white', 'black']);
        },
        default: 'default'
      },
      size: [Number, String],
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
      cColor () {
        let color = this.color
        switch (color) {
          case 'primary':
            color = 'blue'
            break
          case 'error':
            color = 'red'
            break
          case 'info':
            color = 'lightblue'
            break
          case 'warning':
            color = 'orange'
            break
          default:
            break
        }
        return color
      },
      classes () {
        return [
          {
            [`color-${this.cColor}`]: (this.cColor !== 'default')
          }
          // {
          //   [`${prefixCls}-${this.type}`]: this.type !== '',
          //   [`${this.custom}`]: this.custom !== '',
          // }
        ];
      },
      styles () {
        let style = {};

        if (this.size) {
          style['width'] = `${this.size}px`;
          style['height'] = `${this.size}px`;
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
