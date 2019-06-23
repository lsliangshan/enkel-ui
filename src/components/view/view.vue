<template>
  <f7-view class="safe-areas"
           :main="main"
           :url="url">
    <!-- <slot name="header"></slot> -->
    <!-- <e-page class="page-with-navbar-large">
      <slot></slot>
    </e-page> -->
    <!-- <slot></slot> -->
  </f7-view>
</template>
<script>
import { f7View } from 'framework7-vue'
export default {
  name: 'View',
  components: {
    f7View
  },
  props: {
    main: {
      type: Boolean,
      default: false
    },
    animate: {
      type: Boolean,
      default: true
    },
    pushState: {
      type: Boolean,
      default: true
    },
    url: {
      type: String,
      default: '/'
    }
  }
}
</script>
