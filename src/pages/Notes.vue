<template>
  <div
    class="flex flex-col space-y-4 bg-blue-200 border border-blue-900 rounded-sm px-4 py-2"
  >
    <div class="flex space-x-80">
      <span class="text-2xl">My Notes</span>
      <div
        class="bg-red-900 text-white text-lg font-bold px-2 w-1/3 text-center shadow-md rounded-sm"
        v-show="alertWarning"
      >
        Please Complete Note !!
      </div>
    </div>

    <AddNote @ShowAlert="alertWarning = true" />
  </div>
</template>

<script setup lang="ts">
// imports
// import NoteCard from "@/components/Notes/NoteCard.vue";
import AddNote from "../components/Notes/AddNote.vue";
// import { notesData } from "@/components/Notes/notesData";

//data import

//dependencies import
import { ref, reactive, onMounted } from "vue";

// refs reactive
const alertWarning = ref<boolean>(false);

// setInterval(() => {
//   if ((alertWarning.value = true)) {
//     alertWarning.value = false;
//   }
// }, 5000);

//hooks
</script>

<style scoped></style>
