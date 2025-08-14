import { createRouter, createWebHistory } from "vue-router";
import Playground from "@App/Playground.vue";

const routes = [
  {
    path: "/playground",
    component: Playground
  },
];

export const Router = createRouter({
  history: createWebHistory(), routes
});
