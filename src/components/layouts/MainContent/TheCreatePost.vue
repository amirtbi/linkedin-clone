<template>
  <!-- Create Post modal -->
  <!-- backdrop -->
  <div
    v-if="isActive"
    @click="hideModal"
    class="backdrop-invert backdrop-opacity-25 backdrop fixed top-0 left-0 h-screen w-full z-[50]"
  ></div>
  <teleport to="body">
    <transition name="fade">
      <base-modal @close="hideModal" v-if="isActive">
        <!-- header -->
        <template #header>
          <div>
            <h2 class="text-[1.5rem] font-Roboto font-normal">Create a post</h2>
          </div>
        </template>
        <!-- form body -->
        <template #main>
          <form
            @submit.prevent="submitPost"
            class="flex-col justify-center form__container px-[1rem]"
          >
            <div class="pt-[0.75rem] px-[1.2rem] flex top__form">
              <div class="w-full flex items-center profile">
                <img
                  class="rounded-[100%] w-[50px]"
                  src="../../../assets/images/person1.jpg"
                  alt=""
                />
                <p class="text-[1.2rem] ml-2 font-bold font-Roboto">
                  Amir hosein
                </p>
              </div>
            </div>
            <div class="px-[1.2rem] py-[0.75rem] input__field w-full">
              <textarea
                class="placeholder:text-gray-500 w-full outline-none"
                placeholder="What do you want to talk about?"
                maxlength="100"
                @input="enableSubmitBtn"
                v-model="postContent"
              ></textarea>
            </div>
            <div
              class="flex justify-between shareOptions px-[0.75rem] py-[2rem]"
            >
              <ul class="flex items-center">
                <li
                  class="mr-[0.75rem]"
                  v-for="(option, index) in uploadOptions"
                  :key="index"
                >
                  <a
                    :title="option.toolTip"
                    class="cursor-pointer text-[1.2rem]"
                  >
                    <i
                      class="hover:bg-gray-300 rounded-[100%] p-[1rem]"
                      :class="option.Icon"
                    ></i>
                  </a>
                </li>
              </ul>
              <div class="flex actions">
                <button
                  ref="submitButton"
                  :class="{ activatedButton: activeBtn }"
                  disabled
                  class="cursor-pointer px-[1.5rem] py-[0.5rem] rounded-[2rem] bg-gray-400 text-white"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </template>
      </base-modal>
    </transition>
  </teleport>
  <div class="w-full flex-col p-[1rem] flex justify-between post__container">
    <div class="top__container flex items-center w-full">
      <div class="mr-[0.5rem] flex-[0.1] profile__container">
        <img
          class="object-cover max-w-[60px] rounded-[100%]"
          src="../../../assets/images/person1.jpg"
          alt=""
        />
      </div>
      <div class="flex-[0.9]">
        <div class="input__createPost" @click="showModal">
          <span class="text-zinc-500 text-[17.5px] font-bold font-Roboto"
            >Start a post</span
          >
        </div>
      </div>
    </div>
    <div class="mt-[1rem] pl-[0.2rem] w-full options__container">
      <ul class="w-full flex items-center">
        <li
          v-for="(option, index) in uploadOptions"
          :key="index"
          class="hover:bg-gray-200 hover:rounded-lg p-2 ml-[0.4rem] cursor-pointer flex items-center last:mr-0"
        >
          <a class="flex justify-between items-center">
            <span class="mr-[1rem] text-[1rem]"
              ><i :class="option.Icon"></i
            ></span>
            <span class="text-[1rem] text-zinc-500 font-bold">{{
              option.title
            }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadOptions: [
        {
          title: "Photo",
          Icon: "bi bi-image text-blue-800",
          toolTip: "Add a photo",
        },
        {
          title: "Video",
          Icon: "bi bi-play-btn-fill text-emerald-500",
          toolTip: "Add a video",
        },
        {
          title: "Jobs",
          Icon: "bi bi-briefcase text-violet-700",
          toolTip: "Add a job",
        },
        {
          title: "Write article",
          Icon: "bi bi-blockquote-right text-rose-400",
          toolTip: "add an article",
        },
      ],
      isActive: false,
      activeBtn: false,
      postContent: "",
    };
  },
  computed: {
    // buttonIsActive() {
    //   if (this.postContent !== "") {
    //     this.$refs.submitButton.removeAttribute("disabled");
    //     return true;
    //   } else {
    //     this.$refs.submitButton.setAttribute("disabled");
    //     return false;
    //   }
    // },
  },
  methods: {
    submitPost() {
      console.log("post submitted");
    },
    showModal() {
      console.log("clicked");
      this.isActive = true;
    },
    hideModal() {
      this.isActive = false;
      this.postContent = "";
      this.activeBtn = false;
      this.$refs.submitButton.setAttribute("disabled", "");
    },
    enableSubmitBtn() {
      const btnSubmit = this.$refs.submitButton;
      if (this.postContent !== "") {
        console.log(btnSubmit);
        btnSubmit.removeAttribute("disabled");
        this.activeBtn = true;
      } else {
        btnSubmit.setAttribute("disabled", "");
        this.activeBtn = false;
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter-to,
.fade-leave-from {
  transform: translateY(0px);
  opacity: 1;
}
.activatedButton {
  background-color: blue;
  color: white;
}
</style>
