<template>
  <f7-view :main="main"
           :url="url"
           :animate="animate"
           :push-state="pushState">
    <slot></slot>
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
        default: true
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
