import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "vue-router";
// import { BootstrapVue } from "bootstrap-vue";

//import Form from "./components/Form.vue";
const Bar = { template: "<div>bar</div>" };
const routes = [
  //{ path: "/login", component: Form },
  { path: "/", component: App },
  { path: "/bar", component: Bar },
];

const router = new createRouter({
  routes, // short for `routes: routes`
});

// Vue.config.productionTip = false;
// Vue.use(BootstrapVue);
// Vue;
new Vue({
  router,
  //render: (h) => h(App),
}).$mount("#app");
