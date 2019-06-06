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
    <div class="view view-main"
         data-url="/">
      <Page>
        <!-- <div class="main-container"> -->
        <!-- <Button @click="clickHandler">点击</Button> -->
        <a href="/button">button</a>
        <!-- <headers></headers>
      <router-view class="main"></router-view>
      <all-svg></all-svg> -->
        <!-- </div> -->
      </Page>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {}
    },
    mounted () {
      this.$enkel.app.views.create('.view-main');
    },
    methods: {
      clickHandler (e) {
        this.$enkel.app.views.main.router.navigate('/button')
      }
    },
    components: {
      AllSvg: (resolve) => require(['./svgs.vue'], resolve),
      Headers: (resolve) => require(['./components/parts/headers.vue'], resolve)
    }
  }
</script>
