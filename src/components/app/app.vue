<template>
  <!-- App root element -->
  <div id="app">
    <!-- Statusbar overlay -->
    <div class="statusbar"></div>

    <!-- Your main view, should have "view-main" class -->
    <div class="view view-main">
      <!-- Initial Page, "data-name" contains page name -->
      <div data-name="home"
           class="page">

        <!-- Top Navbar -->
        <slot name="header">
          <Header title="title">
          </Header>
        </slot>

        <!-- Scrollable page content -->
        <div class="page-content">
          <slot>
            <p>Page content goes here</p>
            <!-- Link to another page -->
            <a href="/test">About app</a>
          </slot>
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
      // if (!this.$enkel.app.views.main) {
      this.$enkel.app.views.create('.view-main');
      // }
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
