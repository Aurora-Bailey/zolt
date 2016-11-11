<template>
  <div class="pixi">
    <div id="pixi_demo"></div>
  </div>
</template>

<script>
  /* Modules */
  var PIXI = require('pixi.js')

  export default {
    name: 'pixi',
    mounted: function () {
      /* eslint-disable */
      var render_width = 600, render_height = 300;
      var renderer = new PIXI.autoDetectRenderer(render_width, render_height, {backgroundColor : 0x1099bb});
      document.getElementById('pixi_demo').appendChild(renderer.view);
      var stage = new PIXI.Container();

      var texture = PIXI.Texture.fromImage('/static/img/bunny.png');
      var bunny = new PIXI.Sprite(texture);
      bunny.anchor.x = 0.5;
      bunny.anchor.y = 0.5;
      bunny.position.x = 300;
      bunny.position.y = 150;
      stage.addChild(bunny);

      animated();
      function animated() {
        requestAnimationFrame(animated);
        bunny.rotation += 0.1;
        renderer.render(stage);
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

  .pixi {

  }
</style>
