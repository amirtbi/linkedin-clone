<template>
  <div class="auth__container mx-auto my-[1rem] w-[500px]">
    <form
      ref="registerFrom"
      class="bg-white shadow-md p-[2rem] rounded-lg w-full"
      @submit.prevent="login"
    >
      <div class="title-container w-full py-2">
        <h1 class="text-[1.5rem] font-bold font-Roboto">Sign in</h1>
      </div>
      <div class="form-field w-full mb-4">
        <label class="text-gray-500">Email</label>
        <input
          :class="{ 'mb-2': email.valid.isVal }"
          class="w-full p-1 mt-[0.5rem] rounded-md border-[1px] border-gray-400"
          type="email"
          id="email"
          v-model="email.val"
        />
        <small class="text-orange-600" v-if="!email.valid.isVal">{{
          email.valid.errorMessage
        }}</small>
      </div>
      <div class="relative form-field w-full">
        <label class="text-gray-500">Password(6 or more characters)</label>
        <input
          :class="{ 'mb-2': password.valid.isVal }"
          class="w-full p-2 mt-[0.5rem] rounded-md border-[2px] border-gray-400"
          :type="inputType"
          placeholder="Password"
          v-model="password.val"
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

      <div class="w-full">
        <button
          class="font-bold rounded-lg font-Roboto text-white bg-sky-700 p-2 w-full hover:bg-sky-800"
        >
          Sign in
        </button>
      </div>
      <div class="w-full pt-2 flex items-center justify-center">
        <span class="text-gray-500 mr-2">New to Linkedin?</span
        ><router-link
          class="text-sky-700 font-bold font-Roboto hover:underline"
          to="/signup"
          >Join now</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
// import
import { Validation } from "../services/_formValidation.js";
export default {
  components: {
    // LoginForm,
  },

  data() {
    return {
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
      userMap: new Map(),
      formIsValid: true,
    };
  },
  computed: {
    pathCheck() {
      if (this.$route.path === "/signup") {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    toggleType() {
      if (this.inputType === "password") {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },

    async login() {
      try {
        // storing inputs value
        this.userMap.set("email", this.email.val);
        this.userMap.set("password", this.password.val);
        // form validation
        const validation = new Validation(this.userMap);
        validation.validate();
        const valResult = validation.result;
        console.log(valResult);
        this.formIsValid = valResult[1];
        this.updateValidation(valResult[0]);

        if (this.formIsValid) {
          await this.$store.dispatch("Signin", this.userMap);
          this.$router.replace("/feed");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    updateValidation(inputs) {
      inputs.forEach((item) => {
        this[`${item.key}`].valid.isVal = item.isVal;
        this[`${item.key}`].valid.errorMessage = item.errorMessage;
      });
    },
  },
};
</script>

<style scoped>
.slide-form-enter-from,
.slide-form-leave-to {
  transform: translateX(-100px);
}
.slide-form-enter-active,
.slide-form-leave-active {
  transition: all 0.5s ease-in;
}
.slide-form-enter-to,
.slide-form-leave-from {
  transform: translateX(0);
}
</style>
e
