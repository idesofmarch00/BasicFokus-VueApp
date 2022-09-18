<script setup lang="ts">
import NavBar from "@/components/common/NavBar.vue";
</script>

<template>
  <main class="flex flex-col h-screen items-center text-black bg-blue-100">
    <NavBar class="" />

    <RouterView class="mt-4 w-full" />
  </main>
</template>

<style scoped></style>
