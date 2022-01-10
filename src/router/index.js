import Vue from "vue";
import Home from "@/views/Home.vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Profile from "@/views/Profile";
const Bar = { template: "<div>bar</div>" };
const routes = [
  { path: "/", component: Home },
  { path: "/bar", component: Bar },
  { path: "/login", component: Login },
  { path: "/profile", component: Profile },
  { path: "*", redirect: "/" },
];
const router = new VueRouter({
  mode: "history",
  //   base: process.env.BASE_URL,
  routes, // short for `routes: routes`
});

Vue.use(VueRouter);

export default router;
