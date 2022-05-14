export default {
  setPostMessage(state, message) {
    state.postMessage = message;
  },
  setPosts(state, payload) {
    state.posts = payload;
  },
  setLoggedInfo(state, payload) {
    state.loggedUser = payload;
  },
};
