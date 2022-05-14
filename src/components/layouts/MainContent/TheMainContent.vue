<template>
  <div class="main-content__container">
    <base-card>
      <create-post></create-post>
    </base-card>
    <!-- posts -->

    <post-item
      v-for="post in allPosts"
      :id="post.id"
      :key="post.id"
      :description="post.description"
      :message="post.message"
      :name="post.name"
    ></post-item>
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
  data() {
    return {
      messages: [],
    };
  },

  computed: {
    getPhotoUrl() {
      return new URL("../../../assets/images/person1.jpg", import.meta.url);
    },
    allPosts() {
      return this.$store.getters.posts;
    },
  },
  methods: {
    setMessage(message) {
      this.message = message;
    },
    loadPosts() {
      // load posts

      this.$store.dispatch("loadPosts");
      const fetchPosts = this.$store.getters.posts;
      this.messages = fetchPosts;
      console.log("loaded posts", this.messages);
    },
  },
  created() {
    // Load posts from database
    this.loadPosts();
  },
};
</script>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter-to,
.fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
