<template>
  <!-- header -->
  <the-header></the-header>

  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
  components: {
    TheHeader,
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
</style>
