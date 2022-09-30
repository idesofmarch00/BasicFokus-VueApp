import { createRouter, createWebHistory } from "vue-router";
import Notes from "@/pages/Notes.vue";
import Pomodoro from "@/pages/Pomodoro.vue";
import Todo from "@/pages/Todo.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Notes",
      component: Notes,
    },
    {
      path: "/pomodoro",
      name: "Pomodoro",
      component: Pomodoro,
    },
    {
      path: "/todo",
      name: "Todo",
      component: Todo,
    },
  ],
});

export default router;
