<template>
  <div class="auth__container mx-auto my-[4rem] w-[400px]">
    <div class="w-full brand__container flex items-center justify-center">
      <h1 class="mr-[0.5rem] font-bold font-Roboto text-[2rem]">Linkedin</h1>
      <span class=""
        ><i class="text-indigo-700 text-[3rem] bi bi-linkedin"></i
      ></span>
    </div>
    <form ref="registerFrom" class="w-full" @submit.prevent="registerForm">
      <div class="form-field w-full">
        <input
          @change="updateValidation"
          :class="{ 'mb-2': fullname.valid.isVal }"
          class="w-full p-2 border-[2px] border-gray-400"
          type="text"
          placeholder="Fullname (required if registering)"
          v-model.trim="fullname.val"
          id="fullname"
        />
      </div>
      <small class="text-orange-600 mt-0" v-if="!fullname.valid.isVal">{{
        fullname.valid.errorMessage
      }}</small>
      <div class="form-field w-full">
        <input
          @change="updateValidation"
          class="w-full p-2 border-[2px] border-gray-400 mb-2"
          type="url"
          v-model="picUrl.val"
          placeholder="public pic url(optional)"
        />
      </div>
      <div class="form-field w-full">
        <input
          @input="updateValidation"
          :class="{ 'mb-2': email.valid.isVal }"
          class="w-full p-2 border-[2px] border-gray-400"
          type="email"
          placeholder="Email"
          id="email"
          v-model.trim="email.val"
        />
        <small class="text-orange-600" v-if="!email.valid.isVal">{{
          email.valid.errorMessage
        }}</small>
      </div>
      <div class="form-field w-full">
        <input
          @input="updateValidation"
          :class="{ 'mb-2': password.valid.isVal }"
          class="w-full p-2 border-[2px] border-gray-400"
          type="password"
          v-model.trim="password.val"
          placeholder="Password"
        />
        <small class="text-orange-600" v-if="!password.valid.isVal">{{
          password.valid.errorMessage
        }}</small>
      </div>
      <div class="w-full">
        <button
          class="font-bold font-Roboto text-white bg-sky-700 p-2 w-full hover:bg-sky-800"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
</template>

<script>
const formValidation = (user) => {
  let validationOutputs = [];
  let formIsValid = true;
  if (!user.email.includes("@") && user.email !== "") {
    validationOutputs.push({
      key: "email",
      isVal: false,
      erroMessage: "Please enter a valid format email",
    });
    formIsValid = false;
  } else if (user.email === "") {
    validationOutputs.push({
      key: "email",
      isVal: false,
      errorMessage: "Please fill the email field",
    });
    formIsValid = false;
  } else {
    validationOutputs.push({ key: "email", erroMessage: null, isVal: true });
  }
  if (user.password.length <= 6 && user.password !== "") {
    validationOutputs.push({
      key: "password",
      isVal: false,
      errorMessage: "Your password length must have at least 6 characters",
    });
    formIsValid = false;
  } else if (user.password === "") {
    validationOutputs.push({
      key: "password",
      isVal: false,
      errorMessage: "Please fill the password field",
    });
    formIsValid = false;
  } else {
    validationOutputs.push({
      key: "password",
      isVal: true,
      errorMessage: null,
    });
  }
  if (user.fullname === "") {
    validationOutputs.push({
      key: "fullname",
      isVal: false,
      errorMessage: "Please fill your fullname field",
    });
    formIsValid = false;
  } else {
    validationOutputs.push({
      key: "fullname",
      isVal: true,
      errorMessage: null,
    });
  }
  return { formIsValid, validationOutputs };
};
export default {
  data() {
    return {
      email: {
        name: "email",
        val: "",
        valid: {
          isVal: true,
          errorMessage: null,
        },
      },
      password: {
        name: "password",
        val: "",
        valid: {
          isVal: true,
          errorMessage: null,
        },
      },
      fullname: {
        name: "fullname",
        val: "",
        valid: {
          isVal: true,
          errorMessage: null,
        },
      },
      picUrl: {
        val: "",
        valid: {
          isVal: true,
          errorMessage: null,
        },
      },
      formIsValid: true,
    };
  },
  methods: {
    async registerForm() {
      this.formIsValid = true;
      // Form validation
      const userInfo = {
        email: this.email.val,
        password: this.password.val,
        fullname: this.fullname.val,
        picUrl: this.picUrl.val,
      };
      const validationResult = formValidation(userInfo);
      this.formIsValid = validationResult.formIsValid;
      const outputsArray = validationResult.validationOutputs;
      console.log(outputsArray);
      outputsArray.forEach((item, index) => {
        this[`${item.key}`].valid.isVal = item.isVal;
        this[`${item.key}`].valid.errorMessage = item.errorMessage;
      });
      // Rgister user
      if (this.formIsValid) {
        await this.$store.dispatch("SignUp", userInfo);
        this.$router.push("/home");
      } else {
        this.$refs.registerFrom.reset();
        console.log("form is not valid");
      }
    },
    //     updateValidation() {
    //       console.log("validation update");
    //       const userInfo = {
    //         email: this.email.val,
    //         password: this.password.val,
    //         fullname: this.fullname.val,
    //         picUrl: this.picUrl.val,
    //       };
    //       const validationResult = formValidation(userInfo);
    //       validationResult.forEach((item) => {
    //         this[`${item.key}`].valid.isVal = item.isVal;
    //         this[`${item.key}`].valid.errorMessage = item.errorMessage;
    //       });
    //     },
  },
};
</script>
