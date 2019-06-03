<template>
  <!-- <i :class="classes" :style="styles" @click="handleClick" v-if="!svg"></i>
    <svg v-else :class="classes" :style="svgStyles" @click="handleClick">
        <use :xlink:href="'#' + svg" :style="pathStyles"></use>
    </svg> -->
  <!-- <div class="enkel-icon"></div> -->
  <!-- <i :class="classes">home</i> -->
  <i :class="classes"
     :style="styles">{{type}}</i>
  <!-- <i class="material-icons"
     v-else-if="$enkel.theme === 'md'">
    home
  </i> -->
</template>
<script>
import { oneOf } from '../../utils/assist';
const prefixCls = 'enkel-icon';
// IOS ICONS https://framework7.io/icons/

export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: [Number, String],
    color: {
      //   validator (value) {
      //     return oneOf(value, ['default', 'primary', 'error', 'info', 'warning', 'red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple', 'deeppurple', 'lightblue', 'teal', 'lime', 'deeporange', 'gray', 'white', 'black']);
      //   },
      type: String,
      default: 'default'
    },
    spin: {
      type: Boolean,
      default: false
    },
    custom: {
      type: String,
      default: ''
    },
    svg: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      buildinColors: ['primary', 'error', 'info', 'warning', 'red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple', 'deeppurple', 'lightblue', 'teal', 'lime', 'deeporange', 'gray', 'white', 'black']
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
        'icon',
        'f7-icons',
        `${prefixCls}`,
        {
          // ['cion-icons']: (this.$enkel.theme !== 'md'),
          // ['f7-icons']: (this.$enkel.theme === 'md'),
          [`color-${this.cColor}`]: (this.cColor !== 'default' && (this.buildinColors.indexOf(this.color) > -1)),
          ['spin']: this.spin
        }
      ];
    },
    styles () {
      let style = {};

      if (this.size) {
        style['font-size'] = `${this.size}px`;
      }

      if (this.color && this.buildinColors.indexOf(this.color) < 0) {
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
<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@-webkit-keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.spin {
  animation: spin 2s infinite linear;
}
</style>
