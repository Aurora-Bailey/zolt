<template>
  <div class="playing" v-bind:class="{inactive: !$root.mouseLock}">
    <div class="click_to_continue" v-on:click="LockMouse()"><div class="center">Click here to continue...</div></div>
    <div id="playing_canvas"></div>
  </div>
</template>

<script>
  /* Modules */
  import Renderer from '../game/Renderer'
  import Input from '../game/Input'

  export default {
    name: 'playing',
    methods: {
      LockMouse: function () {
        Input.lockPointer()
      }
    },
    mounted: function () {
      document.getElementById('playing_canvas').appendChild(Renderer.GetCanvas())
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /* SASS imports */
  @import "../sass/variables";
  @import "../sass/mixins";

  .playing {
    #playing_canvas {
      // render window styles
    }
    .click_to_continue {
      display: none;
    }
  }

  /* Pointer is not locked */
  .inactive {
    #playing_canvas {
      filter: blur(5px) sepia(100%);
    }
    .click_to_continue {
      display: block;
      position: absolute;
      z-index: 1000;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      filter: blur(0.1vh);
      text-align: center;
      font-size: 4vh;

      div {
        pointer-events: none;
      }
      .center {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
