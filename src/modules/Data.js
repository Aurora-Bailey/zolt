export default {
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
  }
}
