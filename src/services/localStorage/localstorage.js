export class localStorageCl {
  constructor(token = "", email = "", photoUrl = "") {
    this.token = token;
    this.email = email;
    this.url = photoUrl;
  }
  addTo() {
    localStorage.setItem("email", this.email);
    localStorage.setItem("token", this.token);
    localStorage.setItem("photoUrl", this.url);
    localStorage.setItem("tokenExpiration", 3600000);
  }
  delete() {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("photoUrl");
    localStorage.removeItem("tokenExpiration");
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
