<template></template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const message = ref("welcome");

    // methods
    const showMessage = () => {
      message.value = "hi";
    };

    return {
      showMessage,
      message,
    };
  },
};
</script>
