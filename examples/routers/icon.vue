<template>
  <div>
    <Icon size="40"
          type="logo_github"
          color="#c8c8c8"></Icon>
    <Icon size="40"
          type="logo_apple"></Icon>
    <Icon type="logo_android"></Icon>
    <Icon v-for="(item, index) in colors"
          :key="index"
          type="logo_android"
          :color="item"></Icon>

    <!-- <Button @click="download">下载logo</Button> -->

    <!-- <div class="logo1">
      <svg xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink">

        <g class="iconsvg-imagesvg"
           transform="translate(0,0)">
          <rect fill-opacity="0"
                stroke-width="0"
                x="0"
                y="0"></rect> <svg x="0"
               y="0"
               class="imagesvg-svg"><svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 88.36 67.35">
              <path d="M33.67 0h46.42a8.29 8.29 0 0 1 8.27 8.27v33.15a1.19 1.19 0 0 1-1.19 1.19h-53.5A8.89 8.89 0 0 1 27.39 40a8.81 8.81 0 0 1 0-12.56 8.89 8.89 0 0 1 6.28-2.64h33.39c1.91 0 1.68-4.63 0-4.63H33.67a13.53 13.53 0 0 0-9.57 4 13.42 13.42 0 0 0 0 19.12 13.53 13.53 0 0 0 9.57 4h53.5a1.19 1.19 0 0 1 1.19 1.19v10.6a8.29 8.29 0 0 1-8.27 8.27H33.67A33.77 33.77 0 0 1 0 33.67 33.77 33.77 0 0 1 33.67 0z"
                    fill-rule="evenodd"
                    fill="purple"></path>
            </svg></svg>
        </g>
      </svg>
    </div> -->
    <!-- <div class="logo2">
      <svg xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink">

        <g class="iconsvg-imagesvg"
           transform="translate(0,0)"
           mask="url(#f0e6b27f39936f4193564958079d8619)">
          <rect fill="purple"
                fill-opacity="1"
                stroke="purple"
                stroke-width="2"
                rx="12"
                ry="12"
                x="0"
                y="0"
                width="88.36"
                height="67.35"></rect> <svg filter="url(#colors7624425449)"
               x="8.526635415898433"
               y="13.632513527170627"
               width="88.36"
               height="67.35"
               class="imagesvg-svg"><svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 88.36 67.35">
              <path d="M33.67 0h46.42a8.29 8.29 0 0 1 8.27 8.27v33.15a1.19 1.19 0 0 1-1.19 1.19h-53.5A8.89 8.89 0 0 1 27.39 40a8.81 8.81 0 0 1 0-12.56 8.89 8.89 0 0 1 6.28-2.64h33.39c1.91 0 1.68-4.63 0-4.63H33.67a13.53 13.53 0 0 0-9.57 4 13.42 13.42 0 0 0 0 19.12 13.53 13.53 0 0 0 9.57 4h53.5a1.19 1.19 0 0 1 1.19 1.19v10.6a8.29 8.29 0 0 1-8.27 8.27H33.67A33.77 33.77 0 0 1 0 33.67 33.77 33.77 0 0 1 33.67 0z"
                    fill="purple"
                    fill-rule="evenodd"></path>
            </svg></svg>
          <defs>
            <filter id="colors7624425449">
              <feColorMatrix type="matrix"
                             values="0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 1 0"
                             class="icon-fecolormatrix"></feColorMatrix>
            </filter>
          </defs>
        </g>
      </svg>
    </div> -->
    <svg>
      <use xlink:href="#logo-icon-1"></use>
    </svg>

  </div>
</template>

<script>

  export default {
    name: 'icon',
    data () {
      return {
        colors: ['primary', 'error', 'info', 'warning']
      }
    },
    methods: {
      d (cls, size) {
        setTimeout(() => {
          var svgXml = document.querySelector('.' + cls).innerHTML

          var image = new Image()
          image.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgXml)))

          var canvas = document.createElement('canvas')
          canvas.width = size
          canvas.height = size

          var context = canvas.getContext('2d')
          context.drawImage(image, 0, 0)

          var a = document.createElement('a')
          a.href = canvas.toDataURL('image/png')
          a.download = cls + '-' + size
          a.click()
        }, 1000 + Math.floor(Math.random() * 1000))
      },
      download () {
        let allSize = [18, 24, 28, 32, 36, 48, 57, 60, 72, 76, 114, 120, 144, 152, 180, 192, 218, 512]
        allSize.forEach(item => {
          this.d('logo1', item)
        })
        // allSize.forEach(item => {
        //   this.d('logo2', item)
        // })
      }
    }
  };
</script>

<style scoped>
  svg {
    width: 88.36px;
    height: 88.36px;
    fill: purple;
    stroke: purple;
  }
</style>
