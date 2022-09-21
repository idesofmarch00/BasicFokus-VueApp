<script setup lang="ts">
// import { notesData } from "./notesData";

// props
type Props = {
  notesData: {
    id: string;
    title: string;
    description: string;
  };
  deleteCard: any;
};
defineProps<Props>();

// function handleDelete() {
// console.log(notesData);
//   emit("delete", notesData.id);
// }
// const emit = defineEmits(["delete"]);
</script>

<template>
  <div
    class="mb-2 flex flex-col space-y-2 bg-orange-100 border-2 border-orange-300 shadow-sm rounded-xl p-2"
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
        @click="deleteCard(notesData.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<style scoped></style>
