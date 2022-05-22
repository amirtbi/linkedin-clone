import { createStore } from "vuex";

// import module
import postModule from "./Modules/posts/index.js";
import userModule from "./Modules/User/index.js";
const store = createStore({
  modules: {
    posts: postModule,
    userModule,
  },
  state() {
    return {};
  },
});

export default store;
