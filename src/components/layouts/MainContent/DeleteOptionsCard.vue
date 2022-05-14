<template>
  <li
    v-for="option in options"
    class="cursor-pointer flex flex-col w-full hover:bg-gray-300 p-[0.75rem]"
    :key="option.id"
  >
    <div class="options flex items-center w-full">
      <span class="text-gray-600 text-[1rem] mr-2"
        ><i class="text-[1.25rem]" :class="option.Icon"></i>
      </span>
      <div>
        <h4 class="text-[0.75rem] font-bold font-Roboto">{{ option.title }}</h4>
        <p class="text-gray-400 text-[0.75rem]" v-if="option.subTitle !== ''">
          {{ option.subTitle }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          id: new Date().toLocaleDateString(),
          title: "Save",
          Icon: "bi bi-bookmark",
          subTitle: "Save for later",
        },
        {
          id: new Date().toLocaleDateString(),
          title: "Copy link to post",
          Icon: "bi bi-link-45deg",
          subTitle: "",
        },
        {
          id: new Date().toLocaleDateString(),
          title: "Unfollow Alireza",
          Icon: "bi bi-x-circle-fill",
          subTitle: "Stay connected but stop seeing post from Alireza",
        },
        {
          id: new Date().toLocaleDateString(),
          title: "I don't want to see this",
          Icon: "bi bi-eye-slash-fill",
          subTitle: "hide or report this post",
        },
      ],
    };
  },
};
</script>
