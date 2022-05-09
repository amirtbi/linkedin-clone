<template>
  <div class="main-nav__container flex justify-start">
    <nav class="flex">
      <ul class="flex nav-links">
        <!-- Options -->
        <header-options
          v-for="link in links"
          :title="link.id"
          :key="link.id"
          :id="link.id"
          :Icon="link.Icon"
        ></header-options>

        <user-avatar :image-src="profile"></user-avatar>
      </ul>
    </nav>
  </div>
</template>

<script>
import HeaderOptions from "../layouts/TheHeaderOptions.vue";
import UserAvatar from "../UI/Avatar.vue";
import userProfile from "../../assets/images/person1.jpg";
import { reactive } from "vue";
// import vue instance
import { computed } from "vue";
export default {
  components: {
    HeaderOptions,
    UserAvatar,
  },
  setup() {
    const links = reactive([
      { id: "Home", Icon: "bi bi-house-door" },
      { id: "My Network", Icon: " bi bi-people" },
      { id: "jobs", Icon: "bi bi-briefcase" },
      { id: "Messaging", Icon: "bi bi-chat-dots" },
      { id: "Notification", Icon: "bi bi-bell" },
    ]);

    // Computed
    const profile = computed(() => {
      return userProfile;
    });

    return {
      links,
      profile,
    };
  },
};
</script>

<style scoped></style>
