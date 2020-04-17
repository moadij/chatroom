import Vue from "vue";
import App from "./App.vue";
// import Log from "./views/Log.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
