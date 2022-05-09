import { createApp } from "vue";
import App from "./App.vue";
// import router
import router from "./router/index.js";
// import store
import store from "./store/index.js";
import "./index.css";
// import Bootstrap icon
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);
app.use(router);
app.use(store);
router.isReady().then(() => {
  app.mount("#app");
});
