<template>
  <div :class="classes"
       :data-name="name">
    <div :class="innerClasses">
      <div class="left">
        <slot name="left">
        </slot>
      </div>
      <div class="title">
        <slot>
          {{title || largeTitle}}
        </slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
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
      name: {
        type: String,
        default: ''
      },
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