<template>
  <div class="flex flex-col space-y-4 items-center py-4">
    <span class="text-3xl font-medium">Add Daily Tasks ToDo</span>

    <form
      action=""
      class="bg-teal-100 flex flex-col justify-center items-center w-full py-4"
    >
      <div class="w-1/2 flex flex-col space-y-4 items-center">
        <div class="flex w-full items-center justify-center">
          <input
            v-model.lazy="inputtask"
            type="text"
            placeholder="Do"
            class="w-1/2"
          /><button
            class="bg-purple-500 w-1/12 hover:bg-blue-600 active:bg-red-600"
            @click.prevent="addTask"
          >
            +
          </button>
        </div>
        <div
          v-for="(task, index) in tasks"
          :key="index"
          class="flex w-96 justify-center items-center"
        >
          <button class="rounded-lg p-2" @click.prevent="taskDone">Done</button>
          <div class="flex bg-pink-200 rounded-md h-1/3 w-2/3">
            <span class="p-2 text-center">{{ task }}</span>
          </div>
          <button class="rounded-lg p-2">Delete</button
          ><button class="rounded-lg p-2">Edit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const inputtask = ref<string>("");

let tasks = [] as any;

function addTask() {
  if (inputtask.value.length > 0) {
    tasks.unshift(inputtask.value);
    console.log(tasks);
    inputtask.value = "";
  }
}

function taskDone() {}
</script>

<style scoped></style>
