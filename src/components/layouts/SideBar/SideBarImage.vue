<template>
  <div class="flex flex-row w-full header-side__contaiiner">
    <div class="flex overflow-hidden w-full side-image__container">
      <img class="h-auto w-full cover-image" :src="coverImage" alt="profile" />
    </div>
  </div>
</template>

<script>
import CoverImage from "../../../assets/images/background-image.avif";
import { computed } from "vue";
export default {
  //   props: {
  //     imageSrc: {
  //       type: String,
  //       required: true,
  //     },
  //   },

  setup() {
    const coverImage = computed(() => {
      return CoverImage;
    });

    return {
      coverImage,
    };
  },
};
</script>
