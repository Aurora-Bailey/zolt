import Data from './Data'

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

function lock () {
  canvas.requestPointerLock()
}
function free () {
  document.exitPointerLock()
}

export default {
  lock,
  free
}
