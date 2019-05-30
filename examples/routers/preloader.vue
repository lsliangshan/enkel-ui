<template>
  <div class="container">
    <div class="line">
      <div class="line-label">Default Preloader</div>
      <div class="line-items">
        <div class="line-item w100p tac">
          <Preloader size="18"></Preloader>
        </div>
      </div>
    </div>
    <div class="line">
      <div class="line-label">Color Preloader</div>
      <div class="line-items">
        <div class="line-item w25p tac ml0"
             v-for="(item, index) in colors"
             :key="index">
          <Preloader :color="item">{{item}}</Preloader>
        </div>
      </div>
    </div>
    <div class="line">
      <div class="line-label">Multi-Color Preloader (MD-THEME ONLY)</div>
      <div class="line-items">
        <div class="line-item w100p tac">
          <Preloader color="multi"></Preloader>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'preloader',
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
  .line {
    position: relative;
    margin-top: 10px;
  }
  .line-label {
    width: 100%;
    padding: 0 10px;
    margin-top: 35px;
    margin-bottom: 10px;
    box-sizing: border-box;
    color: #6d6d72;
    font-size: 14px;
    font-weight: 400;
  }
  .line-items {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;
  }
  .line-item {
    width: 100px;
    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .w100p {
    width: 100%;
  }
  .w25p {
    width: 25%;
  }
</style>
