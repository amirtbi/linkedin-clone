import authService from "../../../services/auth.js";

export default {
  state() {
    return {};
  },
  actions: {
    login(context, payload) {},
    async SignUp(context, payload) {
      const userEntry = {
        email: payload.get("email"),
        password: payload.get("password"),
      };
      const response = await new authService(
        userEntry
      ).SignupWithEmailAndPassword();
      let loggedUser = {};
      if (response) {
        const user = response.user;
        loggedUser = {
          token: user.accessToken,
          userId: user.uid,
          email: user.email,
        };
        // set info of logged user
        console.log("logged", loggedUser);
      } else {
        throw new Error("Sign up has faced some issues");
      }
      context.commit("posts/setLoggedInfo", loggedUser);
    },
    logout(context, payload) {},
  },
  mutations: {},
  getters: {},
};
