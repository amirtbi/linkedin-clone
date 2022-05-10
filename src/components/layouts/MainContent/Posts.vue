<template>
  <div class="posts mt-[1rem]">
    <div class="posts__header items-center flex w-full p-[1rem]">
      <div class="posts__image flex">
        <img class="w-[60px] rounded-[100%]" :src="photoUrl" alt="post" />
      </div>
      <div class="ml-[0.75rem] posts__info w-full">
        <!-- name -->
        <h3 class="text-[1rem] text-black p-0 font-Roboto font-bold">
          {{ name }}
        </h3>
        <!-- description -->
        <p class="text-[0.7rem] text-zinc-600">{{ description }}</p>
        <p class="text-[0.7rem] text-zinc-600">{{ lastUpdated }} edited</p>
      </div>
    </div>
    <!-- post body -->
    <div
      class="mt-[1rem] px-[2rem] pb-[0.75rem] border-b-[1px] border-b-gray-200 post__body"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi
        perspiciatis accusantium cumque. Ab fugiat voluptatem beatae, vero
        aliquam eius ducimus, ut corrupti velit nulla modi, officia vitae veniam
        obcaecati?
      </p>
    </div>
    <!-- post actions -->
    <div
      class="flex items-center justify-between px-[2rem] pb-[0.25rem] pt-[1rem] w-full post__buttons"
    >
      <post-actions></post-actions>
    </div>
  </div>
</template>

<script>
import PostActions from "./PostActions.vue";
export default {
  components: {
    PostActions,
  },
  props: {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastUpdated: {
      type: String,
    },
    photoUrl: {
      type: String,
    },
    messages: {
      type: String,
    },
  },
  setup() {},
};
</script>

<style scoped>
.post__body {
  overflow-wrap: anywhere;
}
</style>
