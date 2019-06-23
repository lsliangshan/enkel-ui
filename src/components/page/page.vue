<template>
  <div class="page">
    <slot name="header"></slot>
    <div class="page-content">
      <slot></slot>
    </div>
  </div>
  <!-- <f7-page class="page-with-navbar-large">
    <slot name="header"></slot>
    <f7-page-content>
      <slot></slot>
    </f7-page-content>
  </f7-page> -->
</template>
<script>
import { f7Page, f7PageContent } from 'framework7-vue'
const prefixCls = 'enkel-page';

export default {
  name: 'Page',
  components: {
    f7Page,
    f7PageContent
  },
  data () {
    return {
      prefixCls: prefixCls
    };
  }
};
</script>
