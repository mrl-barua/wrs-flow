import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("./views/Login.vue"),
  },
  // add more routes as needed
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
