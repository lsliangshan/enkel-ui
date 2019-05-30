<template>
  <div class="container">
    <div class="line">
      <div class="line-label">Default Loading</div>
      <div class="line-items">
        <div class="line-item"
             v-for="(item, index) in loaders.slice(i, i + 1)"
             :key="index">
          <Loading color="#c8c8c8"
                   :type="item.name"></Loading>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'loading',
    data () {
      return {
        colors: ['primary', 'error', 'info', 'warning'],
        i: 1,
        loaders: [
          {
            name: 'ball-pulse',
            count: 3
          },
          {
            name: 'ball-grid-pulse',
            count: 9
          },
          {
            name: 'ball-clip-rotate',
            count: 1
          },
          {
            name: 'ball-clip-rotate-pulse',
            count: 2
          },
          {
            name: 'square-spin',
            count: 1
          },
          {
            name: 'ball-clip-rotate-multiple',
            count: 2
          },
          {
            name: 'ball-pulse-rise',
            count: 5
          },
          {
            name: 'ball-rotate',
            count: 1
          },
          {
            name: 'cube-transition',
            count: 2
          },
          {
            name: 'ball-zig-zag',
            count: 2
          },
          {
            name: 'ball-zig-zag-deflect',
            count: 2
          },
          {
            name: 'ball-triangle-path',
            count: 3
          },
          {
            name: 'ball-scale',
            count: 1
          },
          {
            name: 'line-scale',
            count: 5
          },
          {
            name: 'line-scale-party',
            count: 4
          },
          {
            name: 'ball-scale-multiple',
            count: 3
          },
          {
            name: 'ball-pulse-sync',
            count: 3
          },
          {
            name: 'ball-beat',
            count: 3
          },
          {
            name: 'line-scale-pulse-out',
            count: 5
          },
          {
            name: 'line-scale-pulse-out-rapid',
            count: 5
          },
          {
            name: 'ball-scale-ripple',
            count: 1
          },
          {
            name: 'ball-scale-ripple-multiple',
            count: 3
          },
          {
            name: 'ball-spin-fade-loader',
            count: 8
          },
          {
            name: 'line-spin-fade-loader',
            count: 8
          },
          {
            name: 'triangle-skew-spin',
            count: 1
          },
          {
            name: 'pacman',
            count: 5
          },
          {
            name: 'semi-circle-spin',
            count: 1
          },
          {
            name: 'ball-grid-beat',
            count: 9
          },
          {
            name: 'ball-scale-random',
            count: 3
          }
        ]
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
