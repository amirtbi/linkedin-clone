<template>
  <header
    class="bg-white w-full border-b-[0.5px] fixed top-0 left-0 z-50 border-slate-200 flex justify-evenly"
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
  </header>
</template>

<script>
import SearchBox from "../UI/SearchBox.vue";
import BrandItem from "../UI/Brand.vue";
import TheNav from "../layouts/TheNav.vue";
export default {
  components: {
    SearchBox,
    BrandItem,
    TheNav,
  },
  computed: {
    isLoginPage() {
      return (this.$router.path = "/login");
    },
  },
};
</script>
<style scoped></style>
