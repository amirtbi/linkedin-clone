<template>
  <div class="mt-[0.75rem] side-bottom">
    <h3 class="text-black text-[0.75rem] px-[0.75rem] font-normal font-Roboto">
      Recent
    </h3>
    <ul class="py-[0.5rem]">
      <li
        class="hover:bg-gray-200 cursor-pointer p-[0.5rem] mb-[0.5rem]"
        v-for="(tags, index) in hashTags"
        :key="index"
      >
        <h3
          class="text-gray-500 pl-[0.5rem] text-[0.75rem] font-bold font-Roboto"
        >
          #&nbsp;{{ tags.title }}
        </h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hashTags: [
        { title: "Frontend" },
        { title: "Developer" },
        { title: "Vuejs" },
        { title: "Junior developer" },
      ],
    };
  },
};
</script>
