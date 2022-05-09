<template>
  <div
    class="flex-[0.2] min-h-[100px] flex flex-col bg-white card-container rounded-md"
  >
    <slot></slot>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    cardWidth: {
      type: String,
    },
    cardHeight: {
      type: String,
    },

    setup(props) {
      const cardClasses = computed(() => {
        return { width: props.cardWidth, "min-height": props.cardHeight };
      });

      return {
        cardClasses,
      };
    },
  },
};
</script>
