export class localStorageCl {
  constructor(dataTransfered) {
    this.token = dataTransfered.token || "";
    this.email = dataTransfered.email || "";
    this.url = dataTransfered.photoUrl || "";
    this.fullname = dataTransfered.fullname || "";
  }
  addTo() {
    localStorage.setItem("email", this.email);
    localStorage.setItem("token", this.token);
    localStorage.setItem("photoUrl", this.url);
    localStorage.setItem("fullname", this.fullname);
  }
  delete() {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("photoUrl");
    localStorage.removeItem("fullname", this.fullname);
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
