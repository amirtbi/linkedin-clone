<template>
  <!-- header -->
  <the-header></the-header>
  <main class="flex mt-[80px] pb-[2rem]">
    <router-view v-slot="slotProps">
      <transition name="slide" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
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
