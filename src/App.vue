<template>
  <div>
    <div id="app">
      <router-link to="/">Home</router-link> -
      <router-link to="/login">Login</router-link> -
      <router-link to="/profile">Profile</router-link>
    </div>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  el: "#app",
  name: "app",
};
</script>

<style>
#app {
  background-color: blue;
}
#container {
  align-content: center;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
}

a:visited {
  color: blanchedalmond;
}
</style>
