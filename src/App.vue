<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{margin: 0;padding: 0; height: 100%;background-color: #f0f1f6;}
#app {
  overflow: hidden;height: 100%;
}
</style>
