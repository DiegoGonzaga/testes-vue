<template>
  <div>
    <NavBar />
    <!-- <div class="menuBar">
      <img class="logo" src="logo.jpg" />
      <div id="app" class="nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/login">Login</router-link> -</li>
          <li><router-link to="/profile">Profile</router-link></li>
        </ul>
      </div>
    </div> -->
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  el: "#app",
  name: "app",
  components: { NavBar },
};
</script>

<style>
#app {
  background-color: blue;
}
#container {
  align-content: center;
  height: 100%;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
}

/* a:visited {
  color: blanchedalmond;
}
.menuBar {
  width: 100%;
  height: 50px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
.logo {
  float: left;
}
.nav {
  float: right;
  margin-right: 10px;
}
.nav ul li {
  list-style: none;
  float: left;
} */
</style>
