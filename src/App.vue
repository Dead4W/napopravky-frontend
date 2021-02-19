<template>
  <div id="app">
    <BaseHeader/>
    <BasePage/>
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue'
import BasePage from './components/BasePage.vue'

export default {
  name: 'App',
  components: {
    BaseHeader,
    BasePage,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Brygada+1918:wght@400;500;700&display=swap');

.v-easy-dialog--backdrop-btn {
  background: rgba(0, 0, 0, 0.5);
  border: none;
}

.no-select, button {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.v-easy-dialog--content-container {
  background: #2c2f35;
  border-radius: 20px;
  box-shadow: 0 0 0 1px #3f424b;
  padding: 10px 15px 10px 15px;
  color: #fff;
  max-width: 320px!important;
}

* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  list-style-type: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #202226;
  color: #b2b3b5;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

a {
  color: #61778b
}

body {
  margin: 0;
  overflow-x: hidden;
}
</style>
