<template>
  <f7-views :tabs="tabs">
    <slot></slot>
  </f7-views>
</template>
<script>
  import { f7Views } from 'framework7-vue'
  export default {
    name: 'Views',
    components: {
      f7Views
    },
    props: {
      tabs: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
