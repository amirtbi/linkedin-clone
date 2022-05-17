<template>
  <div class="auth__container mx-auto my-[6rem] w-[500px]">
    <form
      ref="registerFrom"
      class="bg-white shadow-md p-[2rem] rounded-lg w-full"
      @submit.prevent="submitMode"
    >
      <div class="form-field w-full mb-4">
        <label class="text-gray-500">Email</label>
        <input
          :class="{ 'mb-2': email.valid.isVal }"
          class="w-full p-1 mt-[0.5rem] rounded-md border-[1px] border-gray-400"
          type="email"
          id="email"
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
    </form>
  </div>
</template>

<script>
// import

export default {
  components: {
    // LoginForm,
  },
  data() {
    return {};
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
