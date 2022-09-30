<template>
  <div class="flex flex-col space-y-4 items-center py-4">
    <span class="text-3xl font-medium">Add Daily Tasks ToDo</span>

    <form
      action=""
      class="bg-teal-100 flex flex-col justify-center items-center w-full py-4"
    >
      <div class="w-1/2 flex flex-col space-y-4 items-center">
        <!-- INPUT -->
        <div class="flex w-full items-center justify-center rounded-sm">
          <input
            v-model.lazy="inputtask"
            type="text"
            placeholder="Do"
            class="w-1/2 border hover:bg-blue-300 rounded-l-sm"
          /><button
            class="text-white bg-purple-500 w-1/12 hover:bg-blue-600 active:bg-red-600 border rounded-r-md"
            @click.prevent="addTask"
          >
            +
          </button>
        </div>
        <!-- TASK CARD -->
        <div
          v-for="(task, index) in tasks"
          :key="index"
          class="flex w-96 justify-center items-center"
        >
          <button
            class="rounded-lg p-2 active:bg-orange-600"
            @click.prevent="taskDone(index)"
          >
            Done
          </button>
          <div class="flex bg-pink-200 rounded-md w-2/3">
            <span class="p-2 text-center">{{ task }}</span>
          </div>
          <button
            @click.prevent="taskDelete(task, index)"
            class="rounded-lg p-2 active:bg-orange-600"
          >
            Delete
          </button>
          <button
            @click.prevent="taskEdit(index)"
            class="rounded-lg p-2 active:bg-orange-600"
          >
            Edit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputtask = ref<string>("");

let tasks = ref([]) as any;

function addTask() {
  if (inputtask.value.length > 0) {
    tasks.value.unshift(inputtask.value);
    console.log(tasks);
    inputtask.value = "";
  } else {
    console.log("Add a Task First");
  }
}

function taskDone(index: any) {
  console.log("to done : ", index);
}

function taskDelete(task: any, index: any) {
  console.log("to delete : ", index);
  // tasks = tasks.filter((t: any) => t !== task);
  console.log(task);
  tasks.value.splice(index, 1);
}

function taskEdit(index: any) {
  console.log("to edit : ", index);
}
</script>

<style scoped></style>
