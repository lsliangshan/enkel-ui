<template>
  <!-- <Page name="page">
    <a href="javascript:void(0)"
       data-path="/button"
       @click="goto">Button</a>
  </Page> -->
  <!-- <e-page class="page-with-navbar-large"> -->
  <!-- <f7-block> -->
  <e-page>
    <headers slot="header"
             large></headers>
    <div class="home_container"
         data-path="/button"
         @click="goto">Home</div>
  </e-page>

  <!-- </f7-block> -->
  <!-- </e-page> -->
</template>
<script>
import { f7Block } from 'framework7-vue'
import Headers from '../components/parts/headers'
export default {
  name: 'home',
  components: {
    Headers
  },
  mounted () {
    console.log('》》》》this.$enkel: ', this.$enkel)
  },
  methods: {
    goto (e) {
      // this.$router.push(e.target.dataset.path)
      this.$f7router.navigate(e.target.dataset.path)
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

