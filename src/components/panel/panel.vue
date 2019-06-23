<template>
  <f7-panel :side="position"
            :reveal="reveal"
            :cover="cover"
            :resizable="resizable"
            :opened="opened">
    <slot></slot>
  </f7-panel>
  <!-- <div class="panel panel-left panel-reveal">
    <slot>
      <div class="content-block">
        <p><a href="#"
             class="panel-close">Close me</a></p>
        <p><a href="#"
             data-panel="right"
             class="panel-close">Open Right Panel</a></p>
      </div>
    </slot>
  </div> -->
</template>
<script>
import { f7Panel } from 'framework7-vue'
const prefixCls = 'enkel-panel'
export default {
  name: 'Panel',
  components: {
    f7Panel
  },
  props: {
    position: {
      type: String,
      default: 'left'
    },
    reveal: {
      type: Boolean,
      default: true
    },
    cover: {
      type: Boolean,
      default: false
    },
    resizable: {
      type: Boolean,
      default: false
    },
    opened: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    classes () {
      return [
        prefixCls
      ]
    }
  },
  mounted () {

  }
}
</script>
