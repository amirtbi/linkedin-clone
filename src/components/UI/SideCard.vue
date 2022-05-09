<template>
  <div
    class="mt-[0.5rem] flex-[0.2] min-h-[100px] min-w-[120px] flex flex-col bg-white card-container rounded-md"
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
