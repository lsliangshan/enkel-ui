<template>
  <div :class="classes"
       :data-name="name">
    <div class="page-content"
         v-if="main">
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>
<script>
  const prefixCls = 'enkel-page';

  export default {
    name: 'Page',
    props: {
      main: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        prefixCls: prefixCls
      };
    },
    computed: {
      classes () {
        return !this.main ? [
          'page'
        ] : [
            'view-main'
          ]
      }
    },
    mounted () {
      if (this.main) {

      } else { }
    }
  };
</script>
