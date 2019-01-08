<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
body {
  margin: 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#nav a.router-link-exact-active {
  color: green;
}
.flex-center {
  justify-content: center;
  align-items: center;
  display: flex;
}
.grid-center {
  justify-content: center;
  align-items: center;
  display: grid;
}
</style>
