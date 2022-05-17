import { createApp } from "vue";
import App from "./App.vue";

// import router
import router from "./router/index.js";
// import store
import store from "./store/index.js";
import "./index.css";
// import Bootstrap icon
import "bootstrap-icons/font/bootstrap-icons.css";
// import global component
import BaseCard from "./components/UI/BaseCard.vue";
import BaseModal from "./components/UI/BaseModal.vue";
import BaseBrand from "./components/UI/Brand.vue";

const app = createApp(App);

// registeration of component
app.component("base-card", BaseCard);
app.component("base-modal", BaseModal);
app.component("base-brand", BaseBrand);
app.use(router);
app.use(store);
router.isReady().then(() => {
  app.mount("#app");
});
