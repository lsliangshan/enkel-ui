<template>
    <div class="zpm_magic_item_container" :style="{width: width + 'px', backgroundColor: (subItems[(subItems.length > maxItemLength ? (maxItemLength - 1) : (subItems.length -1))].style && subItems[(subItems.length > maxItemLength ? (maxItemLength - 1) : (subItems.length -1))].style.backgroundColor) || '#FFFFFF'}">
        <div class="zpm_magic_item_wrapper"
             :style="{width: width * 2 + 'px'}"
             :ref="'magic-item-ref-' + uuid"
             @touchstart="touchstart"
        >
            <div class="main_container"
                 :style="{width: width + 'px'}"
                 @click="clickHandler"
            >
                <slot></slot>
                <div class="main_container_mask" :ref="'magic-item-trigger-ref-' + uuid" :style="{width: width + 'px', height: containerHeight + 'px'}"></div>
            </div>
            <div class="sub_items_container"
                 :style="{width: width + 'px'}">
                <div class="sub_item_wrapper"
                     v-for="(item, index) in subItems.slice(0, maxItemLength)" :key="item.event"
                     :style="[{height: containerHeight + 'px'}, item.style]"
                     :data-event-name="item.event"
                     @click="emitCustomEvent"
                >
                    <text :style="{fontSize: ((item.style && item.style.fontSize) || '28px'), color: ((item.style && item.style.color) || '#666666')}">{{item.text}}</text>
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped>
    .zpm_magic_item_container {
        overflow: hidden;
    }
    .zpm_magic_item_wrapper {
        flex-direction: row;
        align-items: stretch;
        justify-content: flex-start;
    }
    .main_container {
        position: relative;
    }
    .main_container_mask {
        position: absolute;
        left: 0;
        top: 0;
    }
    .sub_items_container {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
    .sub_item_wrapper {
        width: 200;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
</style>
<script>
  /**
   * api
   *    this.ZpmMagicItem.closeAll() 关闭所有
   */
  import BindingX from 'weex-bindingx'
  const modal = weex.requireModule('modal')
  const dom = weex.requireModule('dom')
  export default {
    name: 'ZpmMagicItem',
    props: {
      width: {
        type: Number,
        default: 750
      },
      subItems: {
        type: Array,
        default: function () {
          /**
           * 最多2个按钮
           * text: 按钮文字  建议 2-5 个中文
           */
          return [
            // {
            //   text: '保存',
            //   event: 'save',
            //   style: {
            //     backgroundColor: 'darkcyan',
            //     color: 'white',
            //     fontSize: '32px'
            //   }
            // },
            {
              text: '删除',
              event: 'delete',
              style: {
                backgroundColor: 'red',
                color: 'white',
                fontSize: '32px'
              }
            }
          ]
        }
      }
    },
    data () {
      return {
        uuid: '',
        containerHeight: 0,
        gesToken: 0,
        x: 0,
        y: 0,
        isInAnimation: false,
        maxItemLength: 2,
        isOpen: false
      }
    },
    created () {
      this.uuid = Math.random().toString(36).substr(2)
      this.$nextTick(() => {
        setTimeout(() => {
          dom.getComponentRect(this.$refs['magic-item-ref-' + this.uuid], res => {
            if (res.result) {
              this.containerHeight = res.size.height
            }
          })
        }, 1)
        this.touchstart()
      })
    },
    mounted () {
      setTimeout(() => {
        this.initPlugin()
      }, 1)
    },
    methods: {
      initPlugin () {
        const that = this
        let _o = {}
        const _close = function (ref) {
          that.resetView(ref)
        }
        _o.ref = 'magic-item-ref-' + this.uuid
        _o.close = _close
        if (!this.$parent.ZpmMagicItem) {
          this.$parent.ZpmMagicItem = {}
          this.$parent.ZpmMagicItem.list = [_o]
          this.$parent.ZpmMagicItem.closeAll = function () {
            for (let i = 0; i < that.$parent.ZpmMagicItem.list.length; i++) {
              that.$parent.ZpmMagicItem.list[i].close(that.$parent.ZpmMagicItem.list[i].ref)
            }
          }
        } else {
          this.$parent.ZpmMagicItem.list.push(_o)
        }
      },
      closeOther () {
        if (!this.$parent.ZpmMagicItem) {
          return
        }
        for (let i = 0; i < this.$parent.ZpmMagicItem.list.length; i++) {
          if (this.$parent.ZpmMagicItem.list[i].ref !== ('magic-item-ref-' + this.uuid)) {
            this.$parent.ZpmMagicItem.list[i].close(this.$parent.ZpmMagicItem.list[i].ref)
          }
        }
      },
      touchstart () {
        this.closeOther()
        if (this.isInAnimation) {
          if (Number(this.gesToken) !== 0) {
            BindingX.unbind({
              eventType: 'pan',
              token: this.gesToken
            })
            this.gesToken = 0
          }
          return
        }
        let target = this.$refs['magic-item-ref-' + this.uuid].ref
        let trigger = this.$refs['magic-item-trigger-ref-' + this.uuid].ref
        let expressionXOrigin = 'min(x+' + this.x + ',0)'
        let gesTokenObj = BindingX.bind({
          eventType: 'pan',
          anchor: trigger,
          props: [
            {
              element: target,
              property: 'transform.translateX',
              expression: expressionXOrigin
            }
          ]
        }, e => {
          if (e.state === 'end') {
            this.x += e.deltaX
            this.bindTiming()
          }
        })
        this.gesToken = gesTokenObj.token
      },
      bindTiming () {
        if (this.x > 0) {
          this.x = 0
          return
        }
        this.isInAnimation = true
        let target = this.$refs['magic-item-ref-' + this.uuid].ref
        let totalWidth = this.subItems.length > this.maxItemLength ? this.maxItemLength * 200 : this.subItems.length * 200
        let exitOrigin = 't>400'
        let changedX = 0
        let finalX = 0
        if (this.x < -totalWidth / 2) {
          changedX = (-totalWidth - this.x)
          finalX = -totalWidth
        } else {
          changedX = -this.x
          finalX = 0
        }
        let expressionX = 'easeOutQuart(t,' + this.x + ',' + changedX + ',400)'
        BindingX.bind({
          eventType: 'timing',
          exitExpression: exitOrigin,
          props: [
            {
              element: target,
              property: 'transform.translateX',
              expression: expressionX
            }
          ]
        }, e => {
          if (e.state === 'end' || e.state === 'exit') {
            this.x = finalX
            this.isInAnimation = false
            this.isOpen = (this.x !== 0)
          }
        })
      },
      resetView (ref) {
        this.isInAnimation = true
        let target = ref ? this.$refs[ref].ref : this.$refs['magic-item-ref-' + this.uuid].ref
        let changedX = -this.x
        let finalX = 0
        let exitOrigin = 't>400'
        let expressionX = 'easeInOutExpo(t,' + this.x + ',' + changedX + ',400)'
        BindingX.bind({
          eventType: 'timing',
          exitExpression: exitOrigin,
          props: [
            {
              element: target,
              property: 'transform.translateX',
              expression: expressionX
            }
          ]
        }, e => {
          if (e.state === 'end' || e.state === 'exit') {
            this.x = finalX
            this.isInAnimation = false
            this.isOpen = false
          }
        })
      },
      clickHandler (e) {
        if (this.isOpen) {
          this.resetView()
        } else {
          this.$emit('click', e)
        }
      },
      emitCustomEvent (e) {
        this.$emit(e.target.attr.dataEventName)
      }
    },
    components: {}
  }
</script>
