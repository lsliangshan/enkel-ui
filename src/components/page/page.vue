<template>
  <div class="page">
    <div class="page-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  const prefixCls = 'enkel-page';

  export default {
    name: 'Page',
    data () {
      return {
        prefixCls: prefixCls
      };
    }
  };
</script>
