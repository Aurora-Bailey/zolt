/* This is the rendering portion of the game */
/* Modules */
var THREE = require('three')
import Data from '../modules/Data'

var renderWidth = 1920
var renderHeight = 1080
var scene, camera, renderer

scene = new THREE.Scene()
camera = new THREE.PerspectiveCamera(30, renderWidth / renderHeight, 1, 10000)
camera.up = new THREE.Vector3(0, 0, 1)
camera.position.z = 3000
camera.position.y = -1250

renderer = new THREE.WebGLRenderer()
renderer.setSize(renderWidth, renderHeight)
renderer.setClearColor(0x000000)

var material = []
var geometry = []
var mesh = []
var light = []

geometry[0] = new THREE.BoxGeometry(200, 200, 200)
material[0] = new THREE.MeshPhongMaterial({color: 0xf6546a})

for (let i = 0; i < 1000; i++) {
  let size = 10000
  mesh[i] = new THREE.Mesh(geometry[0], material[0])
  mesh[i].position.set(Math.floor(Math.random() * size) - (size / 2), Math.floor(Math.random() * size) - (size / 2), 100)
  scene.add(mesh[i])
}

light[0] = new THREE.PointLight(0xffffff, 1)
light[0].position.set(0, 0, 400)
scene.add(light[0])

var playerSphere = new THREE.SphereGeometry(100, 32, 32)
var playerMat = new THREE.MeshPhongMaterial({color: 0xffffff})
var player = new THREE.Mesh(playerSphere, playerMat)
player.position.set(0, 0, 100)
scene.add(player)

var floorPlane = new THREE.PlaneGeometry(10000, 10000)
var floorMat = new THREE.MeshPhongMaterial({color: 0x555555, side: THREE.DoubleSide})
var floor = new THREE.Mesh(floorPlane, floorMat)
scene.add(floor)

let alpha = 0
var animate = () => {
  window.requestAnimationFrame(animate)
  /* Rotate camera around camera point
   camera.rotation.z = Data.input.rotation
   camera.rotation.y = Math.sin(Data.input.rotation) * (Math.PI / 8)
   camera.rotation.x = Math.cos(Data.input.rotation) * (Math.PI / 8)
   */

  /* User Input */
  if (Data.input.w) camera.position.z += 5
  if (Data.input.s) camera.position.z -= 5
  if (Data.input.right) {
    player.position.x -= 5 * Math.sin(Data.input.rotation)
    player.position.y += 5 * Math.cos(Data.input.rotation)
  }
  if (Data.input.left) {
    player.position.x += 5 * Math.sin(Data.input.rotation)
    player.position.y -= 5 * Math.cos(Data.input.rotation)
  }
  if (Data.input.up) {
    player.position.y -= 5 * Math.sin(Data.input.rotation)
    player.position.x -= 5 * Math.cos(Data.input.rotation)
  }
  if (Data.input.down) {
    player.position.y += 5 * Math.sin(Data.input.rotation)
    player.position.x += 5 * Math.cos(Data.input.rotation)
  }

  /* Rotate camera around player */
  camera.position.x = player.position.x + (Math.cos(Data.input.rotation) * 1250)
  camera.position.y = player.position.y + (Math.sin(Data.input.rotation) * 1250)
  camera.lookAt(player.position)

  /* Dytamic light */
  light[0].position.x = Math.cos(alpha) * 500 + player.position.x
  light[0].position.y = Math.sin(alpha) * 500 + player.position.y

  renderer.render(scene, camera)
  alpha += 0.01
}
animate()

export default {
  GetCanvas: function () {
    return renderer.domElement
  }
}
