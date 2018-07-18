<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    hello world
  </div>
</template>
<style>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  background: #eee;
  overflow: hidden;
}
.content {
  /* flex: 1; */
  /* display: flex; */
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
  height: auto;
  width: 100%;
}

li {
  /* flex: 1; */
  flex-basis: 0;
  width: 100%;
  height: 40px;
}
</style>

<script>
import BScroll from 'better-scroll'
// let wrapper = document.querySelector('.wrapper')
// let scroll = new BScroll(wrapper)
export default {
  name: 'App',
  data() {
    return {
    }
  },
  created() {

  },
  methods: {

  },
  created() {
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
