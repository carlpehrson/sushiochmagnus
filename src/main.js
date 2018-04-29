// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    lang: 'SV'
  },
  methods: {
    setLangSv: function (event) {
      this.lang = 'SV'
    },
    setLangEn: function (event) {
      this.lang = 'EN'
    },
    setLangJp: function (event) {
      this.lang = 'JP'
    }
  },
  router,
  components: {App},
  template: '<App/>'
})
