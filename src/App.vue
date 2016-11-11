<template>
  <div id="app">
    <button v-on:click="$root.page.state = 'home'">Home</button>
    <button v-on:click="$root.page.state = 'three'">Three</button>
    <button v-on:click="$root.page.state = 'pixi'">Pixi</button>
    <home v-if="$root.page.state === 'home'"></home>
    <three v-if="$root.page.state === 'three'"></three>
    <pixi v-if="$root.page.state === 'pixi'"></pixi>
  </div>
</template>

<script>
/* Components */
// pages
import Home from './pages/Home'
import Three from './pages/Three'
import Pixi from './pages/Pixi'

export default {
  name: 'app',
  components: {
    Home,
    Three,
    Pixi
  },
  mounted: function () {
    this.$root.page.state = 'home'
  }
}
</script>

<style lang="scss">
  /* SASS imports */
  @import "sass/variables";
  @import "sass/mixins";
  @import "sass/general";

  #app {

  }
</style>
