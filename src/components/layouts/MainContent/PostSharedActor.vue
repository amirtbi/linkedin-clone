<template>
  <div class="shared-actor__container flex w-full">
    <div class="posts__image flex max-w-[60px]">
      <img
        class="object-cover rounded-[100%]"
        src="../../../assets/images/person1.jpg"
        alt="post"
      />
    </div>
    <div class="ml-[0.75rem] posts__info w-[100%]">
      <!-- name -->
      <h3 class="text-[1rem] text-black p-0 font-Roboto font-bold">
        {{ name }}
      </h3>
      <!-- description -->
      <p class="text-[0.7rem] text-zinc-600">{{ description }}</p>
      <p class="text-[0.7rem] text-zinc-600">1min:edited</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["description", "name"],
};
</script>
