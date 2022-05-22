import authService from "../../../services/auth.js";
import { doc, collection, setDoc } from "firebase/firestore";
import { db } from "../../../services/firebase.js";

import AuthService from "../../../services/auth.js";
// global functions
class localStorageCl {
  constructor(token = "", email = "") {
    this.token = token;
    this.email = email;
  }
  addTo() {
    localStorage.setItem("email", this.email);
    localStorage.setItem("token", this.token);
  }
  delete() {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  }
  get loggedInfo() {
    const info = {
      token: localStorage.getItem("token"),
      email: localStorage.getItem("email"),
    };
    return info;
  }
}

export default {
  state() {
    return {
      token: null,
      email: null,
    };
  },
  mutations: {
    setLoggedInfo(state, payload) {
      console.log("mutated ");
      state.token = payload.token;
      state.email = payload.email;
    },
  },
  actions: {
    autoLogin(context) {
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("email");

      console.log("Auto login...");
      context.commit("setLoggedInfo", { token: token, email: email });
    },
    async storeLoggedInfo(context, payload) {
      try {
        // DocRef
        const docRef = collection(db, "users");
        await setDoc(doc(docRef), payload);
      } catch (error) {
        console.log(error.message);
      }
    },
    async Signin(context, payload) {
      const userEntry = {
        email: payload.get("email"),
        password: payload.get("password"),
      };
      const response = await new authService(
        userEntry
      ).LoginWithEmailAndPassword();
      if (response) {
        const user = response.user;
        const loggedData = {
          token: user.accessToken,
          email: user.email,
        };
        // storing data inside local storage
        const StoreHanlder = new localStorageCl(
          loggedData.token,
          loggedData.email
        );
        StoreHanlder.addTo();
        context.commit("setLoggedInfo", loggedData);
      } else {
        throw new Error("Login process has been faced some problems");
      }
    },
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
        // storing data inside local storage
        const StoreHanlder = new localStorageCl(
          loggedUser.token,
          loggedUser.email
        );
        StoreHanlder.addTo();
        await context.dispatch("storeLoggedInfo", {
          fullname: payload.get("fullname"),
          email: user.email,
        });
        context.commit("setLoggedInfo", {
          token: loggedUser.token,
          email: loggedUser.email,
        });
      } else {
        throw new Error("Sign up has faced some issues");
      }
      context.commit("posts/setLoggedInfo", loggedUser);
    },
    async logout(context, payload) {
      const StoreHanlder = new localStorageCl();
      StoreHanlder.delete();
      await new AuthService().logout();
    },
  },

  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
  },
};
