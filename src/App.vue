<template>
  <!-- header -->
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
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
* {
  box-sizing: border-box;
}
html {
  height: 100%;
}
body,
#app {
  min-height: 100%;
}
main {
  height: calc(100vh - 120px);
}
</style>
