<script setup lang="ts">
// props
type Props = {
  notesData: {
    title: string;
    description: string;
  };
};

defineProps<Props>();
</script>

<template>
  <div
    class="flex flex-col space-y-2 bg-orange-100 border-2 border-orange-300 shadow-sm rounded-xl p-2"
  >
    <div class="bg-orange-200 text-lg text-black font-bold">
      {{ notesData.title }}
    </div>
    <div class="bg-orange-200 text-sm font-light">
      {{ notesData.description }}
    </div>
    <div class="flex border-2 border-orange-300 rounded-sm">
      <button class="w-1/2 px-10 py-2 text-blue-800">Edit</button>
      <button
        class="border-orange-300 border-l-2 w-1/2 px-10 py-2 text-red-800"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<style scoped></style>
