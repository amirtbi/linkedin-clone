<template>
  <div
    class="relative flex h-auto flex-col items-center justify-center sidebar-top"
  >
    <!-- Cover image -->
    <div class="h-[80px] w-full cover-image__container">
      <img
        class="h-[100%] object-cover w-full rounded"
        src="../../../assets/images/background-image.avif"
        alt="background"
      />
    </div>
    <!-- overlay image -->
    <div class="top-[30px] absolute w-[75px] avatar rounded-full">
      <img
        class="rounded-full border-[1px] border-white"
        :src="personImage"
        alt=""
      />
    </div>
    <!-- Username -->
    <div
      class="mt-[0.75rem] p-[0.75rem] flex w-full items-center justify-center"
    >
      <router-link
        to="/home"
        class="text-black hover:underline text-[1rem] text-center font-['Roboto'] font-bold"
      >
        {{ username }}
      </router-link>
    </div>
    <!-- Profession title -->
    <div class="profession p-[0.5rem] border-b-[1px] border-b-gray-200">
      <h3
        class="text-gray-400 text-center text-[0.8rem] font-normal font-Roboto"
      >
        Frontend Developer | Vuejs
      </h3>
    </div>
    <!-- Static view static -->
    <static-view></static-view>
  </div>
</template>

<script>
import StaticView from "./TheStaticView.vue";
export default {
  components: {
    StaticView,
  },
  computed: {
    personImage() {
      return this.$store.getters.profileImage;
    },
    username() {
      return this.$store.getters.fullname;
    },
  },
};
</script>
]
