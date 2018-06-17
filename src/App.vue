<template>
  <div id="app">

    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'

  export default {
    name: 'app',
    components: {
      NavBar
    }
  }
</script>

<style>
  body {
    background: #f0f3f1;
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto Slab', serif, arial;
  }
</style>