import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import EvaIcons from 'vue-eva-icons';


Vue.config.productionTip = false;
Vue.use(EvaIcons)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
