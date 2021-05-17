<template>
  <img alt="Vue logo" src="https://www.wikicorporates.org/mediawiki/images/b/bf/Naked-Wines-2019.svg">
  <Wines />
</template>

<script>
import Wines from './components/Wines.vue'

export default {
  name: 'App',
  components: {
    Wines
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  max-width: 100%;
  margin: 5px 0;
}
</style>
