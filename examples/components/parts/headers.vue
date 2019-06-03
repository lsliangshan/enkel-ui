<template>
  <div class="header-container">
    <a class="header-item"
       v-for="(item, index) in routes"
       :key="index"
       :class="{active: (item.path === $route.path)}"
       href="javascript:void(0)"
       @click="goto(item.path)">{{item.label}}</a>
  </div>
</template>
<style scoped>
  .header-container {
    position: absolute;
    width: 100%;
    height: 58px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    z-index: 9999;
    box-shadow: 0 1px 10px #c8c8c8;
  }
  .header-item {
    height: 58px;
    padding: 0 8px;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .header-item.active {
    background-color: var(--f7-theme-color);
    color: #ffffff;
  }
</style>
<script>
  export default {
    name: 'headers',
    data () {
      return {
        routes: [
          {
            path: '/button',
            label: 'Button'
          },
          {
            path: '/icon',
            label: 'Icon'
          },
          {
            path: '/popup',
            label: 'Popup'
          },
          {
            path: '/preloader',
            label: 'Preloader'
          },
          {
            path: '/loading',
            label: 'Loading'
          },
          {
            path: '/checkbox',
            label: 'Checkbox'
          },
          {
            path: '/grid',
            label: 'Grid'
          }
        ]
      }
    },
    methods: {
      goto (path) {
        this.$router.replace(path)
      }
    }
  }
</script>
