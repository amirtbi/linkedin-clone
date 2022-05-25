import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../../services/firebase.js";
import AuthService from "../../../services/auth.js";
import { storageService, downloadCl } from "../../../services/upload.js";
//
import { localStorageCl } from "../../../services/localStorage/localstorage.js";

let timer;
export default {
  async retrieveDataFromServer() {
    let data = new Map();

    const querySnapshot = await getDocs(collection(db, "users"));

    querySnapshot.forEach((doc) => {
      data.set(doc.id, doc.data());
    });

    return data;
  },
  autoLogin(context) {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const photoUrl = localStorage.getItem("PhotoUrl");
    const fullname = localStorage.getItem("fullname");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const loggedInfo = {
      token,
      email,
      photoUrl,
      fullname,
    };
    // Timer
    const expiresIn = tokenExpiration - new Date().getTime();
    if (expiresIn < 0) {
      console.log("expiresin");
      return;
    }
    timer = setTimeout(() => {
      context.dispatch("autoLogout");
    }, expiresIn);
    if (token) {
      context.commit("setLoggedInfo", loggedInfo);
      context.commit("setPhotoUrl", photoUrl);
    }
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setLoggedInfo", {
      token: null,
      email: null,
      userId: null,
      fullname: null,
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

    const response = await new AuthService(
      userEntry
    ).LoginWithEmailAndPassword();
    if (response) {
      const user = response.user;

      const resDownload = await context.dispatch("downloadImage", user.uid);
      const fetchData = await context.dispatch("retrieveDataFromServer");

      let foundUser;
      for (let [key, value] of fetchData) {
        if (key === user.uid) {
          foundUser = value;
        }
      }

      const loggedData = {
        token: user.accessToken,
        email: user.email,
        userId: user.uid,
        photoUrl: resDownload,
        fullname: foundUser.fullname,
      };

      // storing data inside local storage
      const StoreHanlder = new localStorageCl(loggedData);
      StoreHanlder.addTo();
      // timer
      const expiresIn = 3600000;
      const tokenExpiration = new Date().getTime() + 3600000;
      localStorage.setItem("tokenExpiration", tokenExpiration);
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

    const response = await new AuthService(
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
      const StoreHanlder = new localStorageCl(loggedUser);
      StoreHanlder.addTo();
      // timer

      const tokenExpiration = new Date().getTime() + 3600000;
      localStorage.setItem("tokenExpiration", tokenExpiration);
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
  async logout(context) {
    await new AuthService({ email: "", password: "" }).logout();
    localStorage.clear();
    clearInterval(timer);
    context.commit("setAutoLogout");
  },
  uploadImage(_, payload) {
    const uploadCl = new storageService(payload);
    uploadCl.uploadImage();
  },
  async downloadImage(_, userId) {
    const response = await new downloadCl(userId).downLoad();
    return response;
  },
};
