export default {
  storePosts(context, payload) {
    context.commit("setPosts", payload);
  },
};
