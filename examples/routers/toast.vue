<template>
  <div>
    <Icon size="40"
          type="logo_github"
          color="#c8c8c8"></Icon>
    <Icon size="40"
          type="logo_apple"></Icon>
    <Icon type="logo_android"></Icon>
    <Icon v-for="(item, index) in colors"
          :key="index"
          type="logo_android"
          :color="item"></Icon>
  </div>
</template>

<script>

export default {
  name: 'toast',
  data () {
    return {
      colors: ['primary', 'error', 'info', 'warning']
    }
  }
};
</script>

<style scoped>
</style>
