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
      /* eslint-disable */
      var scene, camera, renderer;
      var geometry, material, mesh;

      var render_width = 600, render_height = 300;

      init();
      animate();

      function init() {

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 75, render_width / render_height, 1, 10000 );
        camera.position.z = 1000;

        geometry = new THREE.BoxGeometry( 200, 200, 200 );
        material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: false } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( render_width, render_height );

        document.getElementById('three_demo').appendChild( renderer.domElement );
      }

      function animate() {
        requestAnimationFrame( animate );
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        renderer.render( scene, camera );
      }
      /* eslint-enable */
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
