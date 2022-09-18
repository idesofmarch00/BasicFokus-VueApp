<template>
  <div
    class="flex flex-col mb-4 space-y-4 bg-blue-200 border border-blue-900 rounded-sm px-4 py-2"
  >
    <p class="text-2xl">My Notes</p>

    <div class="bg-red-200 rounded-md flex flex-col space-y-4 p-2 w-11/12">
      <div class="flex flex-col space-y-2">
        <p class="bg-red-300 p-2">Add Title</p>
        <input
          type="text"
          placeholder="Note To Self"
          class="rounded-md p-2 hover:bg-blue-50"
        />
      </div>
      <div class="flex flex-col space-y-2">
        <p class="bg-red-300 p-2">Add Description</p>
        <textarea
          rows=""
          cols=""
          class="h-40 rounded-md p-2 hover:bg-blue-50"
          placeholder="Write Something ..."
        ></textarea>
      </div>

      <div class="flex justify-end space-x-4">
        <button
          type="reset"
          class="p-2 bg-red-500 text-yellow-100 rounded-lg text-sm hover:bg-red-700"
        >
          Reset
        </button>
        <button
          type="submit"
          class="p-2 bg-green-500 text-yellow-100 rounded-lg text-sm hover:bg-green-700"
        >
          Add Note
        </button>
      </div>
    </div>

    <hr class="h-[2px] w-11/12 mx-auto rounded-lg bg-blue-900" />

    <div class="bg-yellow-100">
      <NoteCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import NoteCard from "@/components/Notes/NoteCard.vue";
</script>

<style scoped></style>
