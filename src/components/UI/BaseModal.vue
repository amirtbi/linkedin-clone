<template>
  <!-- Modal -->
  <div
    class="fixed top-[20%] left-[35%] z-[10000] rounded-lg shadow-md bg-white min-w-[600px] min-h-[200px] modal__container"
  >
    <header
      class="border-b-[1px] border-b-gray-200 flex items-center modal__header"
    >
      <div class="flex justify-between p-[1rem] w-full">
        <slot name="header"></slot>
        <span @click="closeModal" class="text-[1.5rem] cursor-pointer"
          ><i class="hover:text-gray-500 bi bi-x-circle"></i
        ></span>
      </div>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
