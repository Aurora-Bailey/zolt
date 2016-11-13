<template>
  <div class="three">
    <div id="three_demo"></div>
  </div>
</template>

<script>
  /* Modules */
  var THREE = require('three')

  export default {
    name: 'three',
    mounted: function () {
      var renderWidth = 1920
      var renderHeight = 1080
      var scene, camera, renderer
      let cameraRotation = 0
      let cameraTilt = 0

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(30, renderWidth / renderHeight, 1, 10000)
      camera.up = new THREE.Vector3(0, 0, 1)
      camera.position.z = 3000
      camera.position.y = -1250

      renderer = new THREE.WebGLRenderer()
      renderer.setSize(renderWidth, renderHeight)
      renderer.setClearColor(0x000000)
      document.getElementById('three_demo').appendChild(renderer.domElement)

      /* Pointer Lock asdf */
      let canvas = document.createElement('canvas')
      document.getElementById('three_demo').appendChild(canvas)
      canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock
      // document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock

      renderer.domElement.onclick = function () {
        canvas.requestPointerLock()
        console.log('adsf')
      }

      document.addEventListener('pointerlockchange', lockChangeAlert, false)
      document.addEventListener('mozpointerlockchange', lockChangeAlert, false)

      function lockChangeAlert () {
        if (document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
          console.log('The pointer lock status is now locked')
          document.addEventListener('mousemove', updatePosition, false)
        } else {
          console.log('The pointer lock status is now unlocked')
          document.removeEventListener('mousemove', updatePosition, false)
        }
      }
      function updatePosition (e) {
        console.log(e)
        cameraRotation -= e.movementX / 200
      }

      document.addEventListener('pointerlockerror', lockError, false)
      document.addEventListener('mozpointerlockerror', lockError, false)

      function lockError (e) {
        console.log(e)
      }
      /* End Pointer Lock */

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
        camera.rotation.z = cameraRotation
        camera.rotation.y = Math.sin(cameraRotation) * (Math.PI / 8)
        camera.rotation.x = Math.cos(cameraRotation) * (Math.PI / 8)
        */

        /* User Input */
        if (this.$root.input.w) camera.position.z += 5
        if (this.$root.input.s) camera.position.z -= 5
        if (this.$root.input.left) cameraRotation = (cameraRotation + 0.1) % (Math.PI * 2)
        if (this.$root.input.right) cameraRotation = (cameraRotation - 0.1) % (Math.PI * 2)
        if (this.$root.input.up) {
          player.position.y -= 5 * Math.sin(cameraRotation)
          player.position.x -= 5 * Math.cos(cameraRotation)
        }
        if (this.$root.input.down) {
          player.position.y += 5 * Math.sin(cameraRotation)
          player.position.x += 5 * Math.cos(cameraRotation)
        }

        /* Rotate camera around player */
        camera.position.x = player.position.x + (Math.cos(cameraRotation) * 1250)
        camera.position.y = player.position.y + (Math.sin(cameraRotation) * 1250)
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
