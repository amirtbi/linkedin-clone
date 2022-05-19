export class Validation {
  constructor(user) {
    this.userMap = user;
    this.formIsValid = true;
    this.outputs = [];
  }
  validate() {
    this.outputs = [];
    this.formIsValid = true;
    if (
      !this.userMap.get("email").includes("@") &&
      this.userMap.get("email") !== ""
    ) {
      this.outputs.push({
        key: "email",
        isVal: false,
        erroMessage: "Please enter a valid format email",
      });
      this.formIsValid = false;
    } else if (this.userMap.get("email") === "") {
      this.outputs.push({
        key: "email",
        isVal: false,
        errorMessage: "Please fill the email field",
      });
      this.formIsValid = false;
    } else {
      this.outputs.push({ key: "email", erroMessage: null, isVal: true });
    }
    if (
      this.userMap.get("password").length <= 6 &&
      this.userMap.get("password") !== ""
    ) {
      this.outputs.push({
        key: "password",
        isVal: false,
        errorMessage: "Your password length must have at least 6 characters",
      });
      this.formIsValid = false;
    } else if (this.userMap.get("password") === "") {
      this.outputs.push({
        key: "password",
        isVal: false,
        errorMessage: "Please fill the password field",
      });
      this.formIsValid = false;
    } else {
      this.outputs.push({
        key: "password",
        isVal: true,
        errorMessage: null,
      });
    }
    if (this.userMap.get("fullname") === "") {
      this.outputs.push({
        key: "fullname",
        isVal: false,
        errorMessage: "Please fill your fullname field",
      });
      this.formIsValid = false;
    } else {
      this.outputs.push({
        key: "fullname",
        isVal: true,
        errorMessage: null,
      });
    }
  }
  get result() {
    return [this.outputs, this.formIsValid];
  }
}
