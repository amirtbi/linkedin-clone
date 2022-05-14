<template>
  <base-card>
    <div class="posts mt-[1rem]">
      <div class="posts__header items-center flex w-full p-[1rem]">
        <shared-actor :name="name" :description="description"></shared-actor>
        <div class="remove__button relative flex items-center justify-end">
          <button
            @click="showPostCard(id)"
            title="Delete post"
            class="cursor-pointer hover:bg-gray-300 hover:rounded-[100%] p-[0.5rem]"
          >
            <i class="bi bi-three-dots"></i>
          </button>
          <!-- popup -->
          <transition name="fade-in">
            <div
              v-if="showModal"
              class="popup__container flex h-auto min-w-[300px] absolute -left-[80px] top-[50px] bg-white rounded-lg shadow-md"
            >
              <ul class="flex-col w-full">
                <delete-card></delete-card>
              </ul>
            </div>
          </transition>
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
import SharedActor from "./PostSharedActor.vue";
import PostActions from "./PostActions.vue";
import DeleteCard from "./DeleteOptionsCard.vue";
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  components: {
    PostActions,
    SharedActor,
    DeleteCard,
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
    // lastUpdated: {
    //   type: Object,
    // },
    photoUrl: {
      type: String,
    },
    message: {
      type: String,
    },
    description: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  setup(props) {
    const store = useStore();

    // data
    const showModal = ref(false);
    const showPostCard = () => {
      showModal.value = !showModal.value;
    };

    return {
      showPostCard,
      showModal,
    };
  },
};
</script>

<style scoped>
.post__body {
  overflow-wrap: anywhere;
}
.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.5s;
}
.fade-in-enter-to,
.fade-in-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
