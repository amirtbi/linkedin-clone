<template>
  <div class="mx-[4rem] main-content__container">
    <base-card>
      <create-post></create-post>
    </base-card>
  </div>
</template>

<script>
import CreatePost from "./TheCreatePost.vue";
export default {
  components: {
    CreatePost,
  },
};
</script>
