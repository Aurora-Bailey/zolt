import Vue from 'vue'
import App from './App'
import Data from './modules/Data'
import Input from './modules/Input'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data () {
    return Data // DATA objects are now native
  }
})
