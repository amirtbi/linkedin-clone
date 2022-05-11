<template>
  <main class="flex mt-[80px]">
    <section class="flex w-full lg:px-[300px] pt-[2rem] main__container">
      <!-- side bar left -->
      <div class="w-[20%] min-w-[150px] sidebar">
        <the-aside></the-aside>
      </div>
      <!-- center content -->
      <div class="mx-[20px] w-[50%] content__container">
        <main-content></main-content>
      </div>
      <!-- right sidebar -->
      <div class="sidebar-right w-[20%]"></div>
    </section>
  </main>
</template>

<script>
import TheAside from "@component/layouts/SideBar/TheSidebar.vue";
import MainContent from "@component/layouts/MainContent/TheMainContent.vue";
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
