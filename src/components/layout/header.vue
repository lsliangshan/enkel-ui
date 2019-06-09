<template>
  <div :class="classes">
    <div :class="innerClasses">
      <div class="left">
      </div>
      <div class="title">{{title || largeTitle}}</div>
      <div class="right">
      </div>
      <div class="title-large"
           v-if="largeTitle">
        <div class="title-large-text">{{largeTitle}}</div>
      </div>
    </div>
  </div>
</template>
<script>
const prefixCls = 'enkel-header';
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    },
    largeTitle: {
      type: String,
      default: ''
    },
    hideOnScroll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        prefixCls,
        'navbar'
      ]
    },
    innerClasses () {
      return [
        'navbar-inner',
        'sliding',
        {
          ['navbar-inner-large']: this.largeTitle
        }
      ]
    }
  },
  watch: {
    hideOnScroll: {
      immediate: true,
      handler (val) {
        this.$parent.hideOnScroll(val)
      }
    }
  }
};
</script>