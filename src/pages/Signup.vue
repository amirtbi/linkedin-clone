<template>
  <div class="auth__container mx-auto my-[6rem] w-[500px]">
    <form
      ref="registerFrom"
      class="bg-white shadow-md p-[2rem] rounded-lg w-full"
      @submit.prevent="submitMode"
    >
      <div class="form-field w-full" v-if="mode === '2'">
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

      <div class="form-field w-full mb-4" v-if="mode === '1'">
        <label class="text-gray-500">Email</label>
        <input
          @input="updateValidation"
          :class="{ 'mb-2': email.valid.isVal }"
          class="w-full p-1 mt-[0.5rem] rounded-md border-[1px] border-gray-400"
          type="email"
          id="email"
          v-model.trim="email.val"
        />
        <small class="text-orange-600" v-if="!email.valid.isVal">{{
          email.valid.errorMessage
        }}</small>
      </div>
      <div class="relative form-field w-full" v-if="mode === '1'">
        <label class="text-gray-500">Password(6 or more characters)</label>
        <input
          @input="updateValidation"
          :class="{ 'mb-2': password.valid.isVal }"
          class="w-full p-2 mt-[0.5rem] rounded-md border-[2px] border-gray-400"
          :type="inputType"
          v-model.trim="password.val"
          placeholder="Password"
        />
        <span
          @click="toggleType"
          class="cursor-pointer hover:underline text-gray-600 absolute right-[10px] top-[50px]"
          >Show</span
        >
        <small class="text-orange-600" v-if="!password.valid.isVal">{{
          password.valid.errorMessage
        }}</small>
      </div>
      <div
        class="p-2 mb-2 font-robot text-[0.85rem] w-full text-center"
        v-if="mode === '1'"
      >
        <p class="text-gray-400">
          By clicking Agree & Join, you agree to the LinkedIn
          <span class="text-sky-700 font-bold"
            >User Agreement Privacy Policy,</span
          >
          and <span class="text-sky-700 font-bold">Cookie Policy.</span>
        </p>
      </div>
      <div class="w-full">
        <button
          class="font-bold rounded-lg font-Roboto text-white bg-sky-700 p-2 w-full hover:bg-sky-800"
        >
          {{ modeCaption }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
const formValidation = (user) => {
  let validationOutputs = [];
  let formIsValid = true;
  if (!user.get("email").includes("@") && user.get("email") !== "") {
    validationOutputs.push({
      key: "email",
      isVal: false,
      erroMessage: "Please enter a valid format email",
    });
    formIsValid = false;
  } else if (user.get("email") === "") {
    validationOutputs.push({
      key: "email",
      isVal: false,
      errorMessage: "Please fill the email field",
    });
    formIsValid = false;
  } else {
    validationOutputs.push({ key: "email", erroMessage: null, isVal: true });
  }
  if (user.get("password").length <= 6 && user.get("password") !== "") {
    validationOutputs.push({
      key: "password",
      isVal: false,
      errorMessage: "Your password length must have at least 6 characters",
    });
    formIsValid = false;
  } else if (user.get("password") === "") {
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
  if (user.get("fullname") === "") {
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
const updateInputsValue = (inputs) => {
  inputs.forEach((item, index) => {
    this[`${item.key}`].valid.isVal = item.isVal;
    this[`${item.key}`].valid.errorMessage = item.errorMessage;
  });
};
export default {
  data() {
    return {
      mode: "1",
      modeCaption: "Agree & Join",
      inputType: "password",
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

      formIsValid: true,
      userInfo: new Map(),
    };
  },
  methods: {
    toggleType() {
      if (this.inputType === "password") {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },

    submitMode() {
      if (this.mode === "1") {
        this.modeCaption = "Continue";
        // mode =2 ==> Entering fullname
        this.mode = "2";
        this.userInfo.set("email", this.email.val);
        this.userInfo.set("password", this.password.val);
      } else {
        this.userInfo.set("fullname", this.fullname.val);
        this.registerForm(this.userInfo);
      }
    },
    async registerForm(dataEntry) {
      this.formIsValid = true;
      const validationResult = formValidation(dataEntry);
      this.formIsValid = validationResult.formIsValid;
      const outputsArray = validationResult.validationOutputs;
      updateInputsValue(outputsArray);
      // Rgister user
      if (this.formIsValid) {
        await this.$store.dispatch("SignUp", dataEntry);
        this.$router.push("/home");
      } else {
        this.$refs.registerFrom.reset();
        console.log("form is not valid");
      }
    },
  },
};
</script>
