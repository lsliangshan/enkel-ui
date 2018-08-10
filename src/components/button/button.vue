<template>
  <button
    :class="classes"
    :type="htmlType"
    :disabled="disabled"
    @click="btnClickHandler"
  >
    <Icon class="zeex-load-loop" type="ios-loading" v-if="loading"></Icon>
    <Icon :type="icon" :custom="customIcon" v-if="(icon || customIcon) && !loading"></Icon>
    <span>
      <slot></slot>
    </span>
    <component v-for="(v, k) in ripples" :key="k" :id="k" :rect="v.rect" :is="v.component" :data-id="k" @end="removeRipple"></component>
  </button>
  <!--<a-->
  <!--v-if="to"-->
  <!--:class="classes"-->
  <!--:disabled="disabled"-->
  <!--:href="linkUrl"-->
  <!--:target="target"-->
  <!--@click.exact="handleClickLink($event, false)"-->
  <!--@click.ctrl="handleClickLink($event, true)"-->
  <!--@click.meta="handleClickLink($event, true)">-->
  <!--<Icon class="zeex-load-loop" type="ios-loading" v-if="loading"></Icon>-->
  <!--<Icon :type="icon" :custom="customIcon" v-if="(icon || customIcon) && !loading"></Icon>-->
  <!--<span v-if="showSlot" ref="slot"><slot></slot></span>-->
  <!--</a>-->
  <!--<button-->
  <!--v-else-->
  <!--:type="htmlType"-->
  <!--:class="classes"-->
  <!--:disabled="disabled"-->
  <!--@click="handleClickLink">-->
  <!--<Icon class="zeex-load-loop" type="ios-loading" v-if="loading"></Icon>-->
  <!--<Icon :type="icon" :custom="customIcon" v-if="(icon || customIcon) && !loading"></Icon>-->
  <!--<span v-if="showSlot" ref="slot"><slot></slot></span>-->
  <!--</button>-->
</template>
<style scoped>
  .zeex-btn {
    position: relative;
    overflow: hidden;
  }
  .zeex-btn * {
    pointer-events: none;
  }
</style>
<script>
  import Icon from '../icon';
  import Ripple from '../ripple';
  import {oneOf} from '../../utils/assist';
  import mixinsLink from '../../mixins/link';

  const prefixCls = 'zeex-btn';

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
          return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
        },
        default: 'default'
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
          return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
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
      handleClickLink (event, new_window = false) {
        this.$emit('click', event);

        this.handleCheckClick(event, new_window);
      },
      S4 () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      },
      getUUID () {
        return (this.S4() + this.S4() + '-' + this.S4() + '-' + this.S4() + '-' + this.S4() + '-' + this.S4() + this.S4() + this.S4())
      },
      btnClickHandler (evt) {
        evt.preventDefault()
        let _ripples = JSON.parse(JSON.stringify(this.ripples))
        // _ripples['ripple-' + this.count] = 'ripple'
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
              bgColor: getComputedStyle(evt.target).backgroundColor || '#000000'
            }
          }
        }
        this.ripples = JSON.parse(JSON.stringify(_ripples))
        this.count += 1
      },
      removeRipple (e) {
        let _ripples = JSON.parse(JSON.stringify(this.ripples))
        if (_ripples.hasOwnProperty(e.id)) {
          delete _ripples[e.id]
        }
        this.ripples = JSON.parse(JSON.stringify(_ripples))
      }
    },
    mounted () {
      this.showSlot = this.$slots.default !== undefined;
    }
  };
</script>
