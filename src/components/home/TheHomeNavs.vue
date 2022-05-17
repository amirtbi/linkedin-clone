<template>
  <div
    class="navs pt-[1rem] w-full mx-[10rem] flex justify-between items-center"
  >
    <div class="brand-container flex items-center">
      <base-brand>
        <template #brandName> Linkedin </template>
      </base-brand>
    </div>
    <div class="actions-container flex items-center">
      <router-link
        to="/signup"
        class="p-2 mr-[1.5rem] text-zinc-500 hover:bg-gray-300 hover:text-black font-bold font-Roboto"
      >
        Join now
      </router-link>
      <router-link
        to="login"
        class="hover:bg-sky-100 hover:border-sky-900 font-bold font-Roboto bg-none border-[2px] border-sky-900 rounded-[20px] text-sky-900 px-[1.5rem] py-1"
      >
        Sign in
      </router-link>
    </div>
  </div>
</template>
