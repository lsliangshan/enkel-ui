<template>
  <!-- <Page name="page">
    <a href="javascript:void(0)"
       data-path="/button"
       @click="goto">Button</a>
  </Page> -->
  <e-page>
    <div class="home_container">Home</div>
  </e-page>
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
<style scoped>
  .home_container {
    width: 100%;
    height: 3000px;
  }
</style>

