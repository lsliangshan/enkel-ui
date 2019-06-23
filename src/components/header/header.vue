<template>
  <f7-navbar :sliding="false"
             :innerClass="large ? 'navbar-inner-large' : ''">
    <f7-nav-left>
      <slot name="left"></slot>
    </f7-nav-left>
    <f7-nav-title>
      <slot></slot>
    </f7-nav-title>
    <f7-nav-right>
      <slot name="right"></slot>
    </f7-nav-right>
    <f7-nav-title-large v-if="large">
      <slot name="title-large"></slot>
    </f7-nav-title-large>
  </f7-navbar>
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
    subtitle: {
      type: String,
      default: ''
    },
    titleLarge: {
      type: String,
      default: ''
    },
    large: {
      type: Boolean,
      default: false
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
  }
};
</script>