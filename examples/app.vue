<style lang="less">
  @import "../src/styles/index.less";
  nav {
    margin-bottom: 40px;

    ul {
      display: flex;
      flex-wrap: wrap;
    }
    li {
      display: inline-block;
    }
    li + li {
      border-left: solid 1px #bbb;
      padding-left: 10px;
      margin-left: 10px;
    }
  }
  html,
  body {
    height: 100%;
    overflow: auto;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
  }

  .v-link-active {
    color: #bbb;
  }
  .main {
    margin-top: 58px;
    height: calc(~"100% - 58px");
  }
  .mt0 {
    margin-top: 0 !important;
  }
</style>
<template>
  <div id="app">
    <div class="main-container view">
      <headers></headers>
      <router-view class="main"></router-view>
      <all-svg></all-svg>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {}
    },
    beforeDestroy: function () {

    },
    methods: {},
    components: {
      AllSvg: (resolve) => require(['./svgs.vue'], resolve),
      Headers: (resolve) => require(['./components/parts/headers.vue'], resolve)
    }
  }
</script>
