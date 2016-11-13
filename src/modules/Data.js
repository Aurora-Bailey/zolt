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
    s: false
  }
}

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 37) Data.input.left = true
  else if (e.keyCode === 38) Data.input.up = true
  else if (e.keyCode === 39) Data.input.right = true
  else if (e.keyCode === 40) Data.input.down = true
  else if (e.keyCode === 87) Data.input.w = true
  else if (e.keyCode === 83) Data.input.s = true
})

window.addEventListener('keyup', function (e) {
  if (e.keyCode === 37) Data.input.left = false
  else if (e.keyCode === 38) Data.input.up = false
  else if (e.keyCode === 39) Data.input.right = false
  else if (e.keyCode === 40) Data.input.down = false
  else if (e.keyCode === 87) Data.input.w = false
  else if (e.keyCode === 83) Data.input.s = false
})

export default Data
