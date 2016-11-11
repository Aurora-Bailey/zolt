<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <div id="three_demo"></div>
    <div id="pixi_demo"></div>
  </div>
</template>

<script>
import Hello from './components/Hello'
var PIXI = require('pixi.js')
var THREE = require('three')

export default {
  name: 'app',
  components: {
    Hello
  },
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



    var randerer_pixi = new PIXI.autoDetectRenderer(600, 300, {backgroundColor : 0x1099bb});
    document.getElementById('pixi_demo').appendChild(randerer_pixi.view);
    var stage = new PIXI.Container();

    var texture = PIXI.Texture.fromImage('/static/img/bunny.png');
    var bunny = new PIXI.Sprite(texture);
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;
    bunny.position.x = 300;
    bunny.position.y = 150;
    stage.addChild(bunny);

    animate_pixi();
    function animate_pixi() {
      requestAnimationFrame(animate_pixi);
      bunny.rotation += 0.1;
      randerer_pixi.render(stage);
    }
    /* eslint-enable */
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

  img
    outline: 1px solid red

</style>
