<style lang="less">
  @import '../src/styles/index.less';
</style>
<style lang="less">
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
  }
  .container {
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
  }

  .v-link-active {
    color: #bbb;
  }
</style>
<template>
  <div class="container">
    <!-- <headers></headers> -->
    <nav>
      <ul>
        <li>
          <router-link to="/button">Button</router-link>
        </li>
        <li>
          <router-link to="/icon">Icon</router-link>
        </li>
        <li>
          <router-link to="/input">Input</router-link>
        </li>
        <li>
          <router-link to="/checkbox">Checkbox</router-link>
        </li>
        <li>
          <router-link to="/radio">Radio</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
    <all-svg></all-svg>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return {}
    },
    mounted: function () {

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
