<template>
  <div id="app">
    <button v-on:click="$root.page.state = 'home'">Home</button>
    <button v-on:click="$root.page.state = 'three'">Three</button>
    <home v-if="$root.page.state === 'home'"></home>
    <three v-if="$root.page.state === 'three'"></three>
  </div>
</template>

<script>
/* Components */
// pages
import Home from './pages/Home'
import Three from './pages/Three'

export default {
  name: 'app',
  components: {
    Home,
    Three
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
