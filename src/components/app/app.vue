<template>
  <f7-app :class="classes"
          :params="params"
          :routes="routes">
    <slot></slot>
  </f7-app>
</template>
<style scoped>
  .m0 {
    margin: 0 !important;
  }
  .p0 {
    padding: 0 !important;
  }
</style>

<script>
  import { f7App } from 'framework7-vue'
  const prefixCls = 'enkel-app';
  export default {
    name: 'App',
    components: {
      f7App
    },
    props: {
      id: {
        type: String,
        default: 'app'
      },
      params: {
        type: Object,
        default () {
          return {
            name: 'Enkel Ui',
            id: 'com.enkelui.example'
          }
        }
      },
      routes: {
        type: Array,
        default () {
          return []
        }
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
      this.$nextTick(() => {
        console.log(this.$f7)
      })
    }
  }
</script>
