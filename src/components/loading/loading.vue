<template>
  <div class="loading-container">
    <div class="loader">
      <div :class="classes">
        <div v-for="(item, index) in loaders[type].count"
             :key="index"
             :style="styles"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  /* .loading-container {
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex: 0 1 auto;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .loading-container .loader {
          box-sizing: border-box;
          display: flex;
          flex: 0 1 auto;
          flex-direction: column;
          flex-grow: 1;
          flex-shrink: 0;
          flex-basis: 25%;
          max-width: 25%;
          height: 200px;
          align-items: center;
          justify-content: center;
          perspective: 500px;
        } */
</style>

<script>
  import { oneOf } from '../../utils/assist';
  const prefixCls = 'enkel-loading';

  export default {
    name: 'Loading',
    props: {
      color: {
        validator (value) {
          return oneOf(value, ['multi', 'default', 'primary', 'error', 'info', 'warning', 'red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple', 'deeppurple', 'lightblue', 'teal', 'lime', 'deeporange', 'gray', 'white', 'black']);
        },
        default: 'default'
      },
      type: {
        type: String,
        default: 'ball-pulse'
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
    data () {
      return {
        loaders: {
          'ball-pulse': {
            count: 3
          },
          'ball-grid-pulse': {
            count: 9
          },
          'ball-clip-rotate': {
            count: 1
          },
          'ball-clip-rotate-pulse': {
            count: 2
          },
          'square-spin': {
            count: 1
          },
          'ball-clip-rotate-multiple': {
            count: 2
          },
          'ball-pulse-rise': {
            count: 5
          },
          'ball-rotate': {
            count: 1
          },
          'cube-transition': {
            count: 2
          },
          'ball-zig-zag': {
            count: 2
          },
          'ball-zig-zag-deflect': {
            count: 2
          },
          'ball-triangle-path': {
            count: 3
          },
          'ball-scale': {
            count: 1
          },
          'line-scale': {
            count: 5
          },
          'line-scale-party': {
            count: 4
          },
          'ball-scale-multiple': {
            count: 3
          },
          'ball-pulse-sync': {
            count: 3
          },
          'ball-beat': {
            count: 3
          },
          'line-scale-pulse-out': {
            count: 5
          },
          'line-scale-pulse-out-rapid': {
            count: 5
          },
          'ball-scale-ripple': {
            count: 1
          },
          'ball-scale-ripple-multiple': {
            count: 3
          },
          'ball-spin-fade-loader': {
            count: 8
          },
          'line-spin-fade-loader': {
            count: 8
          },
          'triangle-skew-spin': {
            count: 1
          },
          'pacman': {
            count: 5
          },
          'semi-circle-spin': {
            count: 1
          },
          'ball-grid-beat': {
            count: 9
          },
          'ball-scale-random': {
            count: 3
          }
        }
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
          'loader-inner',
          `${this.type}`
          // {
          //   [`${prefixCls}-${this.type}`]: this.type !== '',
          //   [`${this.custom}`]: this.custom !== '',
          // }
        ];
      },
      styles () {
        let style = {};

        if (this.color) {
          style['background-color'] = this.color
        }

        if (this.size) {
          style['width'] = this.size + 'px'
          style['height'] = this.size + 'px'
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
