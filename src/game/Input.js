/* Push input events to State.js for global access */
import VueData from '../modules/VueData'
import State from './State'

/* General key bindings */
window.addEventListener('keydown', function (e) {
  if (e.keyCode === 37) State.input.left = true
  else if (e.keyCode === 38) State.input.up = true
  else if (e.keyCode === 39) State.input.right = true
  else if (e.keyCode === 40) State.input.down = true
  else if (e.keyCode === 87) State.input.w = true
  else if (e.keyCode === 83) State.input.s = true
})

window.addEventListener('keyup', function (e) {
  if (e.keyCode === 37) State.input.left = false
  else if (e.keyCode === 38) State.input.up = false
  else if (e.keyCode === 39) State.input.right = false
  else if (e.keyCode === 40) State.input.down = false
  else if (e.keyCode === 87) State.input.w = false
  else if (e.keyCode === 83) State.input.s = false
})

/* Pointer lock */
let canvas = document.createElement('canvas')
canvas.id = 'mouse_lock_canvas'
document.getElementById('append').appendChild(canvas)
canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock
if (typeof canvas.requestPointerLock === 'undefined') window.alert('Update your browser!')
document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock

document.addEventListener('pointerlockchange', lockChangeAlert, false)
document.addEventListener('mozpointerlockchange', lockChangeAlert, false)
document.addEventListener('pointerlockerror', lockError, false)
document.addEventListener('mozpointerlockerror', lockError, false)

function lockChangeAlert () {
  if (document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
    State.input.mouseLock = true
    VueData.mouseLock = true
    document.addEventListener('mousemove', updatePosition, false)
  } else {
    State.input.mouseLock = false
    VueData.mouseLock = false
    document.removeEventListener('mousemove', updatePosition, false)
  }
}
function lockError (e) {
  console.log('Pointer Lock Failed!!!')
}
function updatePosition (e) {
  State.input.rotation = (State.input.rotation - (e.movementX / 200)) % (Math.PI * 2)
}
function lockPointer () {
  canvas.requestPointerLock()
}
function freePointer () {
  document.exitPointerLock()
}

export default {
  lockPointer,
  freePointer
}
