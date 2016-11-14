/* This is used to control the game state */
var State = {
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

export default State
