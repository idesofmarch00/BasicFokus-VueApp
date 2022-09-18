<script setup lang="ts">
import NavBar from "@/components/common/NavBar.vue";
</script>

<template>
  <main class="flex flex-col items-center text-black bg-blue-100">
    <NavBar class="" />

    <RouterView class="mt-4 h-screen w-full" />
  </main>
</template>

<style scoped></style>
