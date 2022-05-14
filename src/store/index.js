import { createStore } from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";
// import module
import fbModule from "./Modules/firebase/index.js";
import authModule from "./Modules/User/index.js";
const store = createStore({
  // namespaced: true,
  modules: {
    fbModule,
    authModule,
  },
  state() {
    return {
      posts: [],
      loggedUser: {},
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
});

export default store;
