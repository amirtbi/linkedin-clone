import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

class AuthService {
  constructor(user) {
    this.email = user.email;
    this.password = user.password;
  }

  async SignupWithEmailAndPassword() {
    const response = await createUserWithEmailAndPassword(
      auth,
      this.email,
      this.password
    );
    return response;
  }
  async LoginWithEmailAndPassword() {
    const response = await signInWithEmailAndPassword(
      auth,
      this.email,
      this.password
    );
    return response;
  }
  async logout() {
    await signOut(auth);
  }
}

export default AuthService;
