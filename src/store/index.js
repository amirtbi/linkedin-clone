import { createStore } from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

const store = createStore({
  state() {
    return {};
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
});

export default store;
