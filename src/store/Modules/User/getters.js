export default {
  didLogout(state) {
    return state.didAutoLogout;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
  profileImage(state) {
    if (!!localStorage.getItem("photoUrl")) {
      console.log("from localstorage");
      return localStorage.getItem("photoUrl");
    } else if (state.photoUrl !== "") {
      console.log("from vuex");
    }
  },
  userId(state) {
    return state.userId;
  },
};
