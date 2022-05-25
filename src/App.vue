<template>
  <!-- header -->
  <the-header></the-header>
  <main class="flex mt-[80px] pb-[2rem]">
    <router-view> </router-view>
  </main>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
//import { localStorageCl } from "./services/localStorage/localstorage.js";
export default {
  components: {
    TheHeader,
  },
  computed: {
    Classes() {
      if (this.$route.path === "login") {
        return "hidebodyOverflow";
      } else {
        return "";
      }
    },
    didLogout() {
      return this.$store.getters.didLogout;
    },
  },
  mounted() {
    const bodyEl = document.getElementsByTagName("body")[0];
    if (this.$route.path === "/login") {
      bodyEl.classList.add("overflow-hide");
    } else {
      bodyEl.classList.remove("overflow-hide");
    }
  },
  created() {
    this.$store.dispatch("autoLogin");
  },

  watch: {
    didLogout(curVal, oldVal) {
      if (curVal && curVal !== oldVal) {
        console.log("autlogout...");
        this.$router.replace("/home");
      }
    },
  },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,700&display=swap"); */
* {
  box-sizing: border-box;
}

body {
  width: 100%;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  background-color: rgba(240, 238, 238, 0.8);
}
.slide-enter-from,
.sldie-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
body.overflow-hide {
  overflow-y: hidden;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
</style>
