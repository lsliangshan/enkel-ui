<template>
  <!-- <div class="page">
    <div class="page-content">
      <slot></slot>
    </div>
  </div> -->
  <f7-page>
    <slot name="fixed"></slot>
    <slot></slot>
  </f7-page>
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
