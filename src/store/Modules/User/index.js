//import
import getters from "./getters.js";
import actions from "./actions.js";

export default {
  state() {
    return {
      token: null,
      email: null,
      photoUrl: null,
      userId: null,
      fullname: null,
      didAutoLogout: false,
    };
  },
  mutations: {
    setLoggedInfo(state, payload) {
      state.token = payload.token;
      state.email = payload.email;
      state.userId = payload.userId;
      state.fullname = payload.fullname;
    },
    setPhotoUrl(state, payload) {
      state.photoUrl = payload;
    },
    setAutoLogout(state) {
      state.didAutoLogout = true;
    },
  },
  actions: actions,

  getters: getters,
};
