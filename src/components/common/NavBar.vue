<template>
  <div
    class="relative w-full h-20 flex items-center bg-yellow-200 text-black font-bold text-xl"
  >
    <div class="flex items-center justify-start space-x-4 absolute left-10">
      <router-link to="/" class="text-red-500">Notes</router-link>
      <div class="h-7 w-[2px] bg-gray-400"></div>
      <router-link to="/Pomodoro" class="text-red-500">Pomodoro</router-link>
      <div class="h-7 w-[2px] bg-gray-400"></div>
      <router-link to="/Todo" class="text-red-500">Todo</router-link>
    </div>

    <div class="flex absolute right-10">
      <input
        type="search"
        placeholder="Search"
        class="text-black bg-slate-50"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
