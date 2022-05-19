import authService from "../../../services/auth.js";
import { doc, collection, setDoc } from "firebase/firestore";
import { db } from "../../../services/firebase.js";
export default {
  state() {
    return {};
  },
  actions: {
    async storeLoggedInfo(context, payload) {
      // const loggedInfo = {
      //   fullname: payload.fullname,
      //   email: payload.email,
      // };
      console.log("payload", payload);
      try {
        // DocRef
        const docRef = collection(db, "users");
        await setDoc(doc(docRef), payload);
      } catch (error) {
        console.log(error.message);
      }
    },
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
          fullname: payload.get("fullname"),
        };
        await context.dispatch("storeLoggedInfo", loggedUser);
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
