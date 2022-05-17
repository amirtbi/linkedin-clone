<template>
  <header
    :class="headerClass"
    class="w-full border-b-[0.5px] d top-0 left-0 z-50 flex"
  >
    <div
      v-if="isFeedPage"
      class="bg-white border-slate-200 w-full justify-evenly flex"
    >
      <!-- Brand container -->
      <div class="header-left flex justify-start items-center">
        <!-- brand-->
        <div class="cursor-pointer header-brand mr-2">
          <router-link to="/home">
            <brand-item />
          </router-link>
        </div>
        <!-- Search container -->
        <search-box />
      </div>
      <!-- Main navigation container -->
      <the-nav />
    </div>

    <auth-header v-else-if="isSignup"></auth-header>
    <home-header v-else-if="isHomePage"></home-header>
  </header>
</template>

<script>
import AuthHeader from "../Auth/AuthHeader.vue";
import HomeHeader from "../home/TheHomeNavs.vue";
import SearchBox from "../UI/SearchBox.vue";
import BrandItem from "../UI/Brand.vue";
import TheNav from "../layouts/TheNav.vue";
export default {
  components: {
    SearchBox,
    BrandItem,
    TheNav,
    AuthHeader,
    HomeHeader,
  },
  computed: {
    headerClass() {
      if (this.isHomePage) {
        return { "fixed-header": false };
      } else {
        return { "fixed-header": true };
      }
    },
    isSignup() {
      if (this.$route.path === "/signup" || this.$route.path === "/login") {
        return true;
      } else {
        return false;
      }
    },
    isFeedPage() {
      if (this.$route.path === "/feed") {
        return true;
      } else {
        return false;
      }
    },
    isHomePage() {
      if (this.$route.path === "/home") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style scoped>
.header-fixed-header {
  position: fixed;
}
</style>
