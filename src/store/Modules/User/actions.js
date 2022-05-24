import authService from "../../../services/auth.js";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../services/firebase.js";
import AuthService from "../../../services/auth.js";
import { storageService } from "../../../services/upload.js";
//
import { localStorageCl } from "../../../services/localStorage/localstorage.js";

let timer;
export default {
  autoLogin(context) {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const photoUrl = localStorage.getItem("PhotoUrl");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    // Timer
    const expiresIn = tokenExpiration - new Date().getTime();
    if (expiresIn < 0) {
      return;
    }
    timer = setTimeout(() => {
      context.dispatch("autoLogout");
    }, expiresIn);
    if (token) {
      context.commit("setLoggedInfo", { token: token, email: email });
      context.commit("setPhotoUrl", photoUrl);
    }
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setLoggedInfo", {
      token: null,
      email: null,
      userId: null,
    });
    context.commit("setPhotoUrl", null);
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
      // timer
      const tokenExpiration = localStorage.getItem("tokenExpiration");
      const expiresIn = tokenExpiration;
      timer = setTimeout(() => {
        context.dispatch("autoLogout");
      }, expiresIn);
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
      // timer
      const tokenExpiration = localStorage.getItem("tokenExpiration");
      const expiresIn = tokenExpiration;
      timer = setTimeout(() => {
        context.dispatch("autoLogout");
      }, expiresIn);
      await context.dispatch("storeLoggedInfo", {
        fullname: payload.get("fullname"),
        email: user.email,
        userId: user.uid,
      });
      context.commit("setLoggedInfo", {
        token: loggedUser.token,
        email: loggedUser.email,
        userId: loggedUser.userId,
      });
    } else {
      throw new Error("Sign up has faced some issues");
    }
    context.commit("posts/setLoggedInfo", loggedUser);
  },
  async logout(context, payload) {
    await new AuthService().logout();
    const StoreHanlder = new localStorageCl();
    StoreHanlder.delete();
    clearInterval(timer);
    context.commit("setAutoLogout");
  },
  uploadImage(_, payload) {
    new storageService(payload).uploadImage();
  },
  async downloadImage(_, payload) {
    const response = await new storageService(payload).downloadImage();
    return response;
  },
};
