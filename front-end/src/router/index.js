import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Log from "../views/Log.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/log",
    name: "log",
    component: Log
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
