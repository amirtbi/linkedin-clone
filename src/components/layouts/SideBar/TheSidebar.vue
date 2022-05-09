<template>
  <side-card>
    <!-- side bar top -->
    <sidebar-top></sidebar-top>
  </side-card>
  <side-card>
    <!-- side bar bottom -->
    <side-bottom></side-bottom>
  </side-card>
</template>

<script>
import HeaderImage from "./SideBarImage.vue";
import SidebarTop from "./TheSideBarTop.vue";
import SideBottom from "./TheSideBarbottom.vue";
import SideCard from "../../UI/SideCard.vue";
export default {
  components: {
    HeaderImage,
    SidebarTop,
    SideBottom,
    SideCard,
  },
};
</script>
<style scoped></style>
