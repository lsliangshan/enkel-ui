<template>
  <div :class="classes">
    <div class="content-block">
      <slot>
        ... panel content goes here ...
      </slot>
    </div>
  </div>
</template>
<script>
  import { getUUID } from '../../utils/assist';
  export default {
    name: 'Panel',
    props: {
      position: {
        type: String,
        default: 'left'
      },
      reveal: {
        type: Boolean,
        default: false
      },
      cover: {
        type: Boolean,
        default: false
      },
      resizable: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        UUID: getUUID()
      }
    },
    computed: {
      classes () {
        return [
          'panel',
          `enkel-panel-${this.UUID}`,
          {
            [`panel-${this.position}`]: this.position,
            ['panel-reveal']: this.reveal,
            ['panel-cover']: this.cover,
            ['panel-resizable']: this.resizable
          }
        ]
      }
    },
    mounted () {
      this.$nextTick(() => {
        setTimeout(() => {
          let panel = this.$enkel.app.panel.create({
            el: `.enkel-panel-${this.UUID}`
          })
          console.log('>>>>>>>', panel)
        }, 100)
      })
    }
  }
</script>
