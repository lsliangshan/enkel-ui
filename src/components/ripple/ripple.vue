<template>
  <div class="zeex-ripple" :class="classes" :style="[styles, {'background-color': rect.target.bgColor}]"></div>
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
  .zeex-ripple {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 0;
    top: 0;
    opacity: 0;
    border-radius: 50%;
  }
  .zeex-ripple-visible {
    -webkit-animation: ripple-enter 550ms ease-in-out;
    -o-animation: ripple-enter 550ms ease-in-out;
    animation: ripple-enter 550ms ease-in-out;
    animation-fill-mode: forwards;
  }
  .zeex-ripple-exit {
    /*opacity: 0.3;*/
    /*-webkit-transition: opacity .5s ease-in-out;*/
    /*-moz-transition: opacity .5s ease-in-out;*/
    /*-ms-transition: opacity .5s ease-in-out;*/
    /*-o-transition: opacity .5s ease-in-out;*/
    /*transition: opacity .5s ease-in-out;*/
    -webkit-animation: ripple-exit 100ms ease-in-out;
    -o-animation: ripple-exit 100ms ease-in-out;
    animation: ripple-exit 100ms ease-in-out;
    /*transform-origin: center center;*/
  }
</style>
<script>
  export default {
    props: {
      id: {
        type: String
      },
      rect: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        width: 50,
        height: 50,
        styles: {
          width: '50px',
          height: '50px'
        },
        classes: []
      }
    },
    created () {
      this.$nextTick(() => {
        this.start()
      })
    },
    methods: {
      start () {
        let rippleSize = Math.max(this.rect.target.width, this.rect.target.height) * 2
        let rippleX = this.rect.clientX - this.rect.target.left - rippleSize / 2
        let rippleY = this.rect.clientY - this.rect.target.top - rippleSize / 2
        this.styles = {
          width: rippleSize + 'px',
          height: rippleSize + 'px',
          left: rippleX + 'px',
          top: rippleY + 'px'
        };
        this.classes.push('zeex-ripple-visible')
        setTimeout(() => {
          this.stop(() => {
            this.$emit('end', {
              id: this.id
            })
          })
        }, 500)
      },
      stop (cb) {
        this.classes.push('zeex-ripple-exit')
        setTimeout(() => {
          cb()
        }, 200)
      }
    },
    components: {}
  }
</script>
