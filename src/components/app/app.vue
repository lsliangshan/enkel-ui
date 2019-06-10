<template>
  <div id="app">
    <!-- Statusbar overlay -->
    <div class="statusbar"></div>

    <!-- Your main view, should have "view-main" class -->
    <div class="view view-main">
      <!-- Initial Page, "data-name" contains page name -->
      <div class="page"
           style="background-color: #efeff4;"
           data-name="app">

        <!-- Top Navbar -->
        <slot name="header">
          <Header title="title">
          </Header>
        </slot>
        <!-- <div class="navbar">
          <div class="navbar-inner sliding">
            <div class="left"><a class="link back"><i class="icon icon-back"></i><span class="if-not-md">Back</span></a></div>
            <div class="title">Hide On Scroll</div>
          </div>
        </div> -->
        <!-- <div class="page">
          
          <div class="page-content hide-navbar-on-scroll">
            <div class="block">
              <p>Quis omnis, quam maiores voluptates vero atque porro? Soluta modi dolore eum dolor iste eos perspiciatis vero porro aliquam officia deleniti, cumque rem, consequatur, ea ipsa temporibus dicta architecto saepe.</p>
              <p>Tempora eius, sit distinctio architecto repellat, rerum quae, eum suscipit aperiam libero beatae ut eveniet ex labore illo! Labore illo harum voluptatum nulla ullam natus beatae iste tempora ut fugiat!</p>
              <p>Veritatis vero quis ipsum explicabo beatae consequatur, deleniti, tenetur assumenda sit quisquam soluta, possimus magnam nostrum animi hic sapiente sed laudantium similique quas labore, voluptatem eius aliquam. Sunt, ad aliquam!</p>
              <p>Animi iste, optio mollitia, sint hic neque sed, quis labore deserunt esse delectus fugit impedit qui consequatur reiciendis quam. Totam tenetur, mollitia. Porro optio similique perspiciatis aliquam ipsam vel reprehenderit!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quos asperiores ut, odio numquam ab, qui, alias adipisci in magni reiciendis reprehenderit. Labore esse quae ut tempore consequatur, reprehenderit similique!</p>
              <p>Quis omnis, quam maiores voluptates vero atque porro? Soluta modi dolore eum dolor iste eos perspiciatis vero porro aliquam officia deleniti, cumque rem, consequatur, ea ipsa temporibus dicta architecto saepe.</p>
              <p>Tempora eius, sit distinctio architecto repellat, rerum quae, eum suscipit aperiam libero beatae ut eveniet ex labore illo! Labore illo harum voluptatum nulla ullam natus beatae iste tempora ut fugiat!</p>
              <p>Veritatis vero quis ipsum explicabo beatae consequatur, deleniti, tenetur assumenda sit quisquam soluta, possimus magnam nostrum animi hic sapiente sed laudantium similique quas labore, voluptatem eius aliquam. Sunt, ad aliquam!</p>
              <p>Animi iste, optio mollitia, sint hic neque sed, quis labore deserunt esse delectus fugit impedit qui consequatur reiciendis quam. Totam tenetur, mollitia. Porro optio similique perspiciatis aliquam ipsam vel reprehenderit!</p>
            </div>
          </div>
        </div> -->
        <!-- <div class="navbar">
          <div class="navbar-inner sliding">
            <div class="left">...</div>
            <div class="title">...</div>
            <div class="right">...</div>
            <div class="subnavbar">
              <div class="subnavbar-inner">
                <div class="segmented">
                  <a href="#tab1"
                     class="button button-active">Tab 1</a>
                  <a href="#tab2"
                     class="button">Tab 2</a>
                  <a href="#tab3"
                     class="button">Tab 3</a>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div class="navbar">
          <div class="navbar-inner sliding">
            <div class="left">
              <a class="link back">
                <i class="icon icon-back"></i>
                <span class="if-not-md">Back</span>
              </a>
            </div>
            <div class="title">Hide On Scroll</div>
          </div>
        </div> -->

        <!-- Bottom Toolbar -->
        <!-- <div class="toolbar toolbar-bottom">
          <div class="toolbar-inner">
            <a href="#"
               class="link">Link 1</a>
            <a href="#"
               class="link">Link 2</a>
          </div>
        </div> -->

        <!-- Scrollable page content -->
        <div class="page-content"
             :class="pageContentClasses"
             ref="pageContent">
          <div class="block m0 p0">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .m0 {
    margin: 0 !important;
  }
  .p0 {
    padding: 0 !important;
  }
</style>

<script>
  const prefixCls = 'enkel-app';
  export default {
    name: 'App',
    props: {
      id: {
        type: String,
        default: 'app'
      },
      hideNavbarOnScroll: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
      }
    },
    computed: {
      classes () {
        return [
          prefixCls
        ]
      },
      pageContentClasses () {
        return [
          {
            ['hide-navbar-on-scroll']: this.hideNavbarOnScroll
          }
        ]
      }
    },
    mounted () {
      // setTimeout(() => {
      if (!this.$enkel.app.views.main) {
        this.$enkel.app.views.create('.view-main');
      }
      // }, 3000)
    },
    methods: {
      pageInit (e) {
        console.log('page init: ', e)
      },
      hideOnScroll (val) {
        this.$nextTick(() => {
          // console.log('hide on scroll: ', val)
          // this.hideNavbarOnScroll = val
          // let classList = this.$refs.pageContent.classList
          // if (val) {
          //   if (!classList.contains('hide-navbar-on-scroll')) {
          //     classList.add('hide-navbar-on-scroll')
          //   }
          // } else {
          //   if (classList.contains('hide-navbar-on-scroll')) {
          //     classList.remove('hide-navbar-on-scroll')
          //   }
          // }
          // console.log('...', this.$enkel.app.views.main.router)
          // this.$enkel.app.views.main.router.refreshPage()
        })

      }
    }
  }
</script>
