<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'fly-key'
  }
</script>

<style>

  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    max-width: var(--windowWidth);
    max-height: var(--windowWidth);
    overflow: hidden;
  }
  
</style>
