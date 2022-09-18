<script setup lang="ts"></script>

<template>
  <div
    class="h-16 w-[1200px] flex justify-between items-center bg-purple-300 text-black font-bold text-xl"
  >
    <!-- LINKS -->
    <div class="flex items-center justify-start space-x-4 mx-2">
      <router-link to="/" class="text-blue-600 font-medium hover:underline"
        >Notes</router-link
      >
      <div class="h-7 w-[2px] bg-blue-900"></div>
      <router-link
        to="/Pomodoro"
        class="text-blue-600 font-medium hover:underline"
        >Pomodoro</router-link
      >
      <div class="h-7 w-[2px] bg-blue-900"></div>
      <router-link to="/Todo" class="text-blue-600 font-medium hover:underline"
        >ToDo List</router-link
      >
    </div>

    <!-- SEARCH     -->
    <div class="flex h-12 mx-2">
      <input
        type="search"
        placeholder="Search"
        class="hover:bg-blue-200 text-blue-900 bg-slate-50 border border-white px-2"
      />
      <button
        class="hover:bg-blue-400 rounded-l-none rounded-lg border border-white"
      >
        <img src="@/assets/search.svg" alt="" class="p-2 invert" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
