<template>
  <div
    class="flex flex-col mb-4 space-y-4 bg-blue-200 border border-blue-900 rounded-sm px-4 py-2"
  >
    <p class="text-2xl">My Notes</p>

    <AddNote />

    <hr class="h-[2px] w-11/12 mx-auto rounded-lg bg-blue-900" />

    <div class="bg-yellow-100">
      <NoteCard v-for="(item, index) in " :key="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
// imports
import NoteCard from "@/components/Notes/NoteCard.vue";
import AddNote from "../components/Notes/AddNote.vue";

//data import


//dependencies import
import { ref, reactive } from "vue";

// refs reactive

//props
</script>

<style scoped></style>
