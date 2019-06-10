<template>
  <div class="container">
    <a href="javascript:void(0)"
       data-path="/button"
       @click="goto">Button</a>
  </div>
</template>
<script>
  export default {
    name: 'button',
    methods: {
      goto (e) {
        this.$router.push(e.target.dataset.path)
      }
    }
  }
</script>
