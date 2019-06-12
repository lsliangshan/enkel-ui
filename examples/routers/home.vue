<template>
  <Page name="page">
    <a href="javascript:void(0)"
       data-path="/button"
       @click="goto">Button</a>
  </Page>
</template>
<script>
  export default {
    name: 'home',
    methods: {
      goto (e) {
        this.$router.push(e.target.dataset.path)
      }
    }
  }
</script>
