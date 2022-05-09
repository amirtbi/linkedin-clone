<template>
  <header class="shadow-sm flex items-center">
    <!-- Brand container -->
    <div class="header-left ml-[10rem] flex justify-start items-center">
      <!-- brand-->
      <div class="cursor-pointer header-brand mr-2">
        <brand-item />
      </div>
      <!-- Search container -->
      <search-box />
    </div>
  </header>
</template>

<script>
import SearchBox from "../UI/SearchBox.vue";
import BrandItem from "../UI/Brand.vue";
export default {
  components: {
    SearchBox,
    BrandItem,
  },
};
</script>
<style scoped></style>
