<template>
  <div class="main-content__container">
    <base-card>
      <create-post></create-post>
    </base-card>
    <!-- posts -->
    <base-card>
      <post-item
        name="Alireza Torabi"
        description="Frontend developer"
        :photo-url="getPhotoUrl"
        last-update="2.min"
      ></post-item>
    </base-card>
  </div>
</template>

<script>
import CreatePost from "./TheCreatePost.vue";
import PostItem from "../MainContent/Posts.vue";
export default {
  components: {
    CreatePost,
    PostItem,
  },
  computed: {
    getPhotoUrl() {
      return new URL("../../../assets/images/person1.jpg", import.meta.url);
    },
  },
};
</script>
