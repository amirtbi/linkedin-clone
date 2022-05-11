import { createStore } from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";
// import module
import fbModule from "./Modules/firebase/index.js";

const store = createStore({
  modules: {
    fbModule,
  },
  state() {
    return {
      post: [],
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
});

export default store;
