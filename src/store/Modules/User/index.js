import authService from "../../../services/auth.js";
import { doc, collection, setDoc } from "firebase/firestore";
import { db, storage } from "../../../services/firebase.js";

import AuthService from "../../../services/auth.js";
import { storageService } from "../../../services/upload.js";
// global functions
class localStorageCl {
  constructor(token = "", email = "", photoUrl = "") {
    this.token = token;
    this.email = email;
    this.url = photoUrl;
  }
  addTo() {
    localStorage.setItem("email", this.email);
    localStorage.setItem("token", this.token);
    localStorage.setItem("photoUrl", this.url);
  }
  delete() {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("photoUrl");
  }
  get loggedInfo() {
    const info = {
      token: localStorage.getItem("token"),
      email: localStorage.getItem("email"),
      photoUrl: localStorage.getItem("photoUrl"),
    };
    return info;
  }
}

export default {
  state() {
    return {
      token: null,
      email: null,
      photoUrl: null,
    };
  },
  mutations: {
    setLoggedInfo(state, payload) {
      console.log("mutated ");
      state.token = payload.token;
      state.email = payload.email;
      state.photoUrl = payload.photoUrl;
    },
  },
  actions: {
    autoLogin(context) {
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("email");

      console.log("Auto login...");
      context.commit("setLoggedInfo", { token: token, email: email });
    },
    async storeLoggedInfo(_, payload) {
      try {
        const userInfo = {
          email: payload.email,
          fullname: payload.fullname,
        };
        // DocRef
        // In case  of generating unique id using firebase
        // const docRef = collection(db, "users", payload.userId);
        // In case of generation a unique id by firebase
        // await setDoc(doc(docRef), userInfo);
        // In case of custom id
        await setDoc(doc(db, "users", payload.userId), userInfo);
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
          photoUrl: payload.get("photoUrl"),
        };
        // storing data inside local storage
        const StoreHanlder = new localStorageCl(
          loggedUser.token,
          loggedUser.email,
          loggedUser.photoUrl
        );
        StoreHanlder.addTo();
        await context.dispatch("storeLoggedInfo", {
          fullname: payload.get("fullname"),
          email: user.email,
          userId: user.uid,
        });
        context.commit("setLoggedInfo", {
          token: loggedUser.token,
          email: loggedUser.email,
        });
        if (payload.get("photoUrl") !== "") {
          context.dispatch("uploadImage", {
            file: payload.get("photoUrl"),
            userId: user.uid,
          });
        }
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
    uploadImage(_, payload) {
      new storageService(payload).uploadImage();
    },
    async downloadImage(_, payload) {
      const response = await new storageService(payload).downloadImage();
      return response;
    },
  },

  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    profileImage(state) {
      return state.photoUrl;
    },
  },
};
