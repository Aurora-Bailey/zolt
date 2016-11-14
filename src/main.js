import Vue from 'vue'
import App from './App'
import VueData from './modules/VueData'
import Game from './game/Game'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data () {
    return VueData // DATA objects are now native
  },
  mounted: function () {
    this.$root.page.state = 'home'
    Game.start()
  }
})
