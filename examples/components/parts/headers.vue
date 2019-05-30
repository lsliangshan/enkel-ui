<template>
  <div class="header-container">
    <a class="header-item"
       v-for="(item, index) in routes"
       :key="index"
       href="javascript:void(0)"
       @click="goto(item.path)">{{item.label}}</a>
  </div>
</template>
<style scoped>
  .header-container {
    width: 100%;
    height: 58px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .header-item {
    padding: 0 8px;
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
            path: '/preloader',
            label: 'Preloader'
          },
          {
            path: '/loading',
            label: 'Loading'
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
