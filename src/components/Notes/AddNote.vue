<template>
  <form>
    <div class="bg-red-200 rounded-md flex flex-col space-y-4 p-2 w-11/12">
      <div class="flex flex-col space-y-2">
        <p class="bg-red-300 p-2">Add Title</p>
        <input
          v-model="cardInfo.title"
          type="text"
          placeholder="Note To Self"
          class="rounded-md p-2 hover:bg-blue-50"
          ref="addtitleelm"
        />
      </div>
      <div class="flex flex-col space-y-2">
        <p class="bg-red-300 p-2">Add Description</p>
        <textarea
          v-model="cardInfo.description"
          rows=""
          cols=""
          class="h-40 rounded-md p-2 hover:bg-blue-50"
          placeholder="Write Something ..."
        ></textarea>
      </div>

      <div class="flex justify-end space-x-4">
        <button
          type="reset"
          @click="Reset"
          class="p-2 bg-red-500 text-yellow-100 rounded-lg text-sm hover:bg-red-700"
        >
          Reset
        </button>
        <button
          type="submit"
          @click.prevent="Add"
          class="p-2 bg-green-500 text-yellow-100 rounded-lg text-sm hover:bg-green-700"
        >
          Add Note
        </button>
      </div>
    </div>
  </form>

  <hr class="h-[2px] w-11/12 mx-auto rounded-lg bg-blue-900" />

  <div class="bg-yellow-100">
    <NoteCard
      v-for="item in notesData"
      :key="item.id"
      :notes-data="item"
      @delete="deleteCard"
    />
  </div>
</template>

<script setup lang="ts">
//imports
import { ref, reactive, onMounted } from "vue";
import NoteCard from "./NoteCard.vue";
// import { notesData } from "./notesData";

//variables
const cardInfo = reactive({
  title: "",
  description: "",
}) as any;
// const alert = ref<boolean>(false) as any;

//functions

function Add() {
  if (cardInfo.title && cardInfo.description) {
    let cd = new Date().getTime();
    let id = cd.toString();
    console.log(id);
    // alert.value = false;
    notesData.unshift({
      id,
      title: cardInfo.title,
      description: cardInfo.description,
    });
  }
  // localStorage.set()

  // notesData.push({
  //   title: cardInfo.title,
  //   description: cardInfo.description,
  // });
  else if (cardInfo.title) {
    // alert.value = true;
    emit("ShowAlert");
    console.log("Please write Description");
  } else if (cardInfo.description) {
    // alert.value = true;
    emit("ShowAlert");
    console.log("Please write Title");
  } else {
    // alert.value = true;
    console.log("Please Write Title and Description");
    emit("ShowAlert");
  }
}

function deleteCard(idofelem: any) {
  console.log(idofelem, " to delete");
}

const addtitleelm = ref<HTMLDivElement | null>();
onMounted(() => {
  addtitleelm.value.focus();
});

function Reset() {
  cardInfo.title = "";
  cardInfo.description = "";
}

//props
// type Props = {
//   alert: boolean;
// };
// defineProps<Props>();

const notesData = reactive([]) as any;

//emits
const emit = defineEmits(["ShowAlert"]);
</script>

<style scoped></style>
