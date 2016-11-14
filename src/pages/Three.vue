<template>
  <div class="three">
    <div id="three_demo" v-on:click="LockMouse()"></div>
    {{$root.input.mouseLock}}
    {{$root.input.rotation}}
  </div>
</template>

<script>
  /* Modules */
  var THREE = require('three')
  import MouseLock from '../modules/MouseLock'

  export default {
    name: 'three',
    methods: {
      LockMouse: function () {
        MouseLock.lock()
      }
    },
    mounted: function () {
      var renderWidth = 1920
      var renderHeight = 1080
      var scene, camera, renderer
      let cameraRotation = 0

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(30, renderWidth / renderHeight, 1, 10000)
      camera.up = new THREE.Vector3(0, 0, 1)
      camera.position.z = 3000
      camera.position.y = -1250

      renderer = new THREE.WebGLRenderer()
      renderer.setSize(renderWidth, renderHeight)
      renderer.setClearColor(0x000000)
      document.getElementById('three_demo').appendChild(renderer.domElement)

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
        camera.rotation.z = this.$root.input.rotation
        camera.rotation.y = Math.sin(this.$root.input.rotation) * (Math.PI / 8)
        camera.rotation.x = Math.cos(this.$root.input.rotation) * (Math.PI / 8)
        */

        /* User Input */
        if (this.$root.input.w) camera.position.z += 5
        if (this.$root.input.s) camera.position.z -= 5
        if (this.$root.input.right) {
          player.position.x -= 5 * Math.sin(this.$root.input.rotation)
          player.position.y += 5 * Math.cos(this.$root.input.rotation)
        }
        if (this.$root.input.left) {
          player.position.x += 5 * Math.sin(this.$root.input.rotation)
          player.position.y -= 5 * Math.cos(this.$root.input.rotation)
        }
        if (this.$root.input.up) {
          player.position.y -= 5 * Math.sin(this.$root.input.rotation)
          player.position.x -= 5 * Math.cos(this.$root.input.rotation)
        }
        if (this.$root.input.down) {
          player.position.y += 5 * Math.sin(this.$root.input.rotation)
          player.position.x += 5 * Math.cos(this.$root.input.rotation)
        }

        /* Rotate camera around player */
        camera.position.x = player.position.x + (Math.cos(this.$root.input.rotation) * 1250)
        camera.position.y = player.position.y + (Math.sin(this.$root.input.rotation) * 1250)
        camera.lookAt(player.position)

        /* Dytamic light */
        light[0].position.x = Math.cos(alpha) * 500 + player.position.x
        light[0].position.y = Math.sin(alpha) * 500 + player.position.y

        renderer.render(scene, camera)
        alpha += 0.01
      }
      animate()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /* SASS imports */
  @import "../sass/variables";
  @import "../sass/mixins";

  .three {

  }
</style>
