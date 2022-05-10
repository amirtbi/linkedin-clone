<template>
  <div
    v-for="(btn, index) in actionButtons"
    :key="index"
    class="hover:bg-gray-300 cursor-pointer text-zinc-600 p-[0.75rem] flex items-center action__item"
  >
    <span class="mr-[0.5rem]"><i :class="btn.Icon"></i></span>
    <h3 class="font-bold font-Roboto">{{ btn.title }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actionButtons: [
        { title: "Like", Icon: "bi bi-hand-thumbs-up" },
        { title: "Comments", Icon: "bi bi-chat-left-text" },
        { title: "Share", Icon: "bi bi-share" },
        { title: "Send", Icon: "bi bi-send" },
      ],
    };
  },
};
</script>
t
