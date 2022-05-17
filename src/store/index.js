import { createStore } from "vuex";

// import module
import postModule from "./Modules/posts/index.js";
import authModule from "./Modules/User/index.js";
const store = createStore({
  modules: {
    posts: postModule,
    authModule,
  },
  state() {
    return {};
  },
});

export default store;
