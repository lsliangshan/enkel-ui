<template>
  <f7-app :class="classes"
          :params="params"
          :routes="routes"
          :id="id">
    <e-view :main="true"
            url="/">
    </e-view>
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
import Vue from 'vue'
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
        return this.$enkelOpts || {
          name: 'Enkel Ui',
          id: 'com.enkelui.example'
        }
      }
    },
    routes: {
      type: Array,
      default () {
        return this.$enkelOpts.routes || []
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
    this.$f7ready((f7) => {
      Vue.prototype.$enkel = f7
      global.ENKEL = f7
    });
  }
}
</script>
