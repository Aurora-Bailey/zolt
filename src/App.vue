<template>
  <div id="app">
    <button v-on:click="$root.page.state = 'home'">Home</button>
    <button v-on:click="$root.page.state = 'playing'">Playing</button>
    <home v-if="$root.page.state === 'home'"></home>
    <playing v-if="$root.page.state === 'playing'"></playing>
  </div>
</template>

<script>
/* Components */
// pages
import Home from './pages/Home'
import Playing from './pages/Playing'

export default {
  name: 'app',
  components: {
    Home,
    Playing
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
