<template>
  <div class="w-full flex-col p-[1rem] flex justify-between post__container">
    <div class="top__container flex items-center w-full">
      <div class="mr-[0.5rem] flex-[0.1] profile__container">
        <img
          class="object-cover max-w-[60px] rounded-[100%]"
          src="../../../assets/images/person1.jpg"
          alt=""
        />
      </div>
      <div class="flex-[0.9]">
        <input
          type="text"
          class="cursor-pointer placeholder:text-gray-500 placeholder:font-bold placeholder:font-Roboto border-2 w-full border-gray-300 bg-gray-200 p-[1rem] rounded-[50px]"
          placeholder="Start a post..."
        />
      </div>
    </div>
    <div class="mt-[1.2rem] w-full options__container">
      <ul class="w-full flex items-center">
        <li
          v-for="(option, index) in uploadOptions"
          :key="index"
          class="hover:bg-gray-200 mr-[1rem] cursor-pointer p-[0.5rem] flex items-center"
        >
          <a class="text-[1.2rem] flex justify-between">
            <span class="mr-[0.75rem]"><i :class="option.Icon"></i></span>
            <span>{{ option.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadOptions: [
        { title: "Photo", Icon: "bi bi-image text-blue-800" },
        { title: "Video", Icon: "bi bi-play-btn-fill text-emerald-500" },
        { title: "Jobs", Icon: "bi bi-briefcase text-violet-700" },
      ],
    };
  },
  computed: {},
};
</script>
