<template>
  <div class="home">
    <img src="../assets/logo.png">
    <hello></hello>
    {{$root.version.micro}}
  </div>
</template>

<script>
  /* Components */
  // parts
  import Hello from '../parts/Hello'

  export default {
    name: 'home',
    components: {
      Hello
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /* SASS imports */
  @import "../sass/variables";
  @import "../sass/mixins";

  .home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
</style>
