<template>
  <base-card>
    <div class="posts mt-[1rem]">
      <div class="posts__header items-center flex w-full p-[1rem]">
        <div class="posts__image flex">
          <img
            class="w-[60px] rounded-[100%]"
            src="../../../assets/images/person1.jpg"
            alt="post"
          />
        </div>
        <div class="ml-[0.75rem] posts__info w-full">
          <!-- name -->
          <h3 class="text-[1rem] text-black p-0 font-Roboto font-bold">
            {{ name }}
          </h3>
          <!-- description -->
          <p class="text-[0.7rem] text-zinc-600">{{ description }}</p>
          <p class="text-[0.7rem] text-zinc-600">
            {{ updatedTime }}&nbsp;{{
              updatedTime == 1 ? "hours ago" : "min ago"
            }}: edited
          </p>
        </div>
      </div>
      <!-- post body -->
      <div
        class="mt-[0.5rem] px-[2rem] pb-[0.75rem] border-b-[1px] border-b-gray-200 post__body"
      >
        <p class="font-Roboto font-normal">
          {{ message }}
        </p>
      </div>
      <!-- post actions -->
      <div
        class="flex items-center justify-between px-[2rem] pb-[0.25rem] pt-[1rem] w-full post__buttons"
      >
        <post-actions></post-actions>
      </div>
    </div>
  </base-card>
</template>

<script>
import PostActions from "./PostActions.vue";
import { ref, watch, onMounted } from "vue";
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
      type: Object,
    },
    photoUrl: {
      type: String,
    },
    message: {
      type: String,
    },
    description: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  setup(props) {
    const currentTime = ref(new Date().getMinutes());

    const firebaseTime = ref(null);
    const updatedTime = ref(null);
    firebaseTime.value = new Date(
      props.lastUpdated * 1000 + props.lastUpdated / 1000000
    )
      .toLocaleTimeString()
      .split(":")[1];
    updatedTime.value = currentTime.value - firebaseTime.value;
    // methods
    const updateTime = () => {
      currentTime.value = new Date().getMinutes();
      updatedTime.value = Math.abs(currentTime.value - firebaseTime.value);
      if (updateTime.value <= 0) {
        updatedTime.value = 1;
      }
    };
    onMounted(() => {
      setInterval(() => {
        updateTime();
      }, 1000);
    });
    // watch
    watch(updateTime, (newVal, oldVal) => {
      if (newVal > oldVal) {
        updatedTime.value = currentTime.value - firebaseTime.value;
      } else {
        updatedTime.value = currentTime.value - firebaseTime.value;
      }
    });
    return {
      updatedTime,
    };
  },
};
</script>

<style scoped>
.post__body {
  overflow-wrap: anywhere;
}
</style>
