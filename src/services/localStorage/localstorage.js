export class localStorageCl {
  constructor(dataTransfered) {
    this.token = dataTransfered.token || "";
    this.email = dataTransfered.email || "";
    this.url = dataTransfered.photoUrl || "";
    this.fullname = dataTransfered.fullname || "";
    // this._tokenExpiration = new Date().getTime();
  }
  addTo() {
    localStorage.setItem("email", this.email);
    localStorage.setItem("token", this.token);
    localStorage.setItem("photoUrl", this.url);
    localStorage.setItem("fullname", this.fullname);
    // localStorage.setItem("tokenExpiration", this._tokenExpiration);
  }
  delete() {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("photoUrl");
    localStorage.removeItem("fullname", this.fullname);
    // localStorage.removeItem("tokenExpiration");
  }
  get loggedInfo() {
    const info = {
      token: localStorage.getItem("token"),
      email: localStorage.getItem("email"),
      photoUrl: localStorage.getItem("photoUrl"),
      fullname: localStorage.getItem("fullname"),
    };
    return info;
  }
}
