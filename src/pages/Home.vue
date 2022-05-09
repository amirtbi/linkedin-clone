<template>
  <main class="mt-[80px]">
    <section class="w-full flex px-[300px] pt-[2rem] main__container">
      <!-- side bar left -->
      <div class="flex-[0.2] min-w-[150px] sidebar">
        <the-aside></the-aside>
      </div>
      <!-- center content -->
      <div class="flex-[0.8] content__container">
        <main-content></main-content>
      </div>
      <!-- right sidebar -->
      <div class="sidebar-right flex-[0.2]"></div>
    </section>
  </main>
</template>

<script>
import TheAside from "../components/layouts/SideBar/TheSidebar.vue";
import MainContent from "../components/layouts/MainContent/TheMainContent.vue";
import { ref } from "vue";
export default {
  components: {
    TheAside,
    MainContent,
  },
  setup() {
    const message = ref("welcome");

    // methods
    const showMessage = () => {
      message.value = "hi";
    };

    return {
      showMessage,
      message,
    };
  },
};
</script>
<style scoped></style>
