/* Data controlled by Vue.js used as a global app state. Can be accessed from anywhere, changes to Data.js will update in Vue.js real time.  */
import GlobalSettings from './GlobalSettings'
var Data = {
  version: {
    compatible: GlobalSettings.version.compatible,
    micro: GlobalSettings.version.micro
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
  mouseLock: false
}

export default Data
