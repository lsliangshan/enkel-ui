<template>
  <div class="container">
    <div class="item">
      <a href="#"
         data-popup=".my-popup"
         class="popup-open">Open Popup</a>
    </div>
    <Popup></Popup>
  </div>
</template>

<script>

  export default {
    name: 'popup',
    data () {
      return {
        colors: ['primary', 'error', 'info', 'warning']
      }
    },
    methods: {
      test (e) {
        console.log('clicked', e);
      }
    }
  };
</script>

<style scoped>
  .tac {
    text-align: center;
  }
  .ml0 {
    margin-left: 0 !important;
  }
  .container {
    overflow-y: auto;
  }
  .item {
    padding: 20px 10px;
    box-sizing: border-box;
  }
</style>
