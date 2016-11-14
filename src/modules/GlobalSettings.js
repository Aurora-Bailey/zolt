/* Settings to be used everywhere  */
var GlobalSettings = {
  version: {
    compatible: 'GSE4H65',
    micro: 'v001'
  },
  server: {
    dev: window.location.hostname === 'localhost',
    address: window.location.hostname === 'localhost' ? 'localhost' : 'ws.kingz.io',
    port: '7777'
  }
}

export default GlobalSettings
