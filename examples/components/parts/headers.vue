<template>
  <e-header :large="large">
    <div style="color: red;">{{title}}</div>
    <div slot="title-large"
         v-if="large">{{titleLarge}}</div>
    <a href="javascript:void(0)"
       slot="left"
       class="link"
       v-if="left">
      <Icon type="chevron_left"></Icon>
      <p v-if="leftText">{{leftText}}</p>
    </a>
    <a href="#"
       slot="right">
      <!-- <Icon type="more_vertical_fill"></Icon> -->
    </a>
  </e-header>
</template>
<style scoped>
</style>
<script>
export default {
  name: 'headers',
  props: {
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Enkel Ui'
    },
    subtitle: {
      type: String,
      default: 'powered by enkel'
    },
    titleLarge: {
      type: String,
      default: 'Enkel Ui'
    },
    large: {
      type: Boolean,
      default: false
    },
    hideOnScroll: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    leftText: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>
