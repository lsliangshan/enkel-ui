<template>
  <f7-navbar :class="classes"
             ref="header">
    <f7-nav-left>
      <slot name="left"></slot>
    </f7-nav-left>
    <f7-nav-title>
      <slot></slot>
    </f7-nav-title>
    <f7-nav-right>
      <slot name="right"></slot>
    </f7-nav-right>
    <f7-nav-title-large>
      <slot name="title-large"></slot>
    </f7-nav-title-large>
  </f7-navbar>
  <!-- <div :class="classes"
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
  </div> -->
</template>
<script>
  import { f7Navbar, f7NavLeft, f7NavRight, f7NavTitle, f7NavTitleLarge } from 'framework7-vue';
  const prefixCls = 'enkel-header';
  export default {
    name: 'e-header',
    components: {
      f7Navbar,
      f7NavLeft,
      f7NavRight,
      f7NavTitle,
      f7NavTitleLarge
    },
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
          prefixCls
        ]
      }
    },
    mounted () {
      console.log('>>>>>>', this.$refs.header)
    }
  };
</script>