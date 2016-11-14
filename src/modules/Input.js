import Data from './Data'

/* General key bindings */
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

/* Pointer lock */
let canvas = document.createElement('canvas')
canvas.id = 'mouse_lock_canvas'
document.getElementById('append').appendChild(canvas)
canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock
document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock

document.addEventListener('pointerlockchange', lockChangeAlert, false)
document.addEventListener('mozpointerlockchange', lockChangeAlert, false)
document.addEventListener('pointerlockerror', lockError, false)
document.addEventListener('mozpointerlockerror', lockError, false)

function lockChangeAlert () {
  if (document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
    Data.input.mouseLock = true
    document.addEventListener('mousemove', updatePosition, false)
  } else {
    Data.input.mouseLock = false
    document.removeEventListener('mousemove', updatePosition, false)
  }
}
function lockError (e) {
  console.log('Pointer Lock Failed!!!')
}
function updatePosition (e) {
  Data.input.rotation = (Data.input.rotation - (e.movementX / 200)) % (Math.PI * 2)
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
