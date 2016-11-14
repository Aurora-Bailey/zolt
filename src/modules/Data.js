/* Data controlled by Vue.js used as a global app state. Can be accessed from anywhere, changes to Data.js will update in Vue.js real time.  */
var Data = {
  version: {
    compatible: 'GSE4H65',
    micro: 'v001'
  },
  server: {
    dev: window.location.hostname === 'localhost',
    address: window.location.hostname === 'localhost' ? 'localhost' : 'ws.kingz.io',
    port: '7777'
  },
  page: {
    state: 'init',
    url: '',
    title: 'Init',
    history: []
  },
  user: {
    id: 0,
    name: ''
  },
  input: {
    up: false,
    left: false,
    right: false,
    down: false,
    w: false,
    s: false,
    mouseLock: false,
    rotation: 0
  }
}

export default Data
