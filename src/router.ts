import { createWebHistory, createRouter } from "vue-router";

import Login from "./views/Login.vue";
import CreateAccount from "./views/CreateAccount.vue";
import ForgotPassword from "./views/ForgotPassword.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue"; // 404 page

const routes = [
  { path: "/", component: Login },
  { path: "/create-account", component: CreateAccount },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/:pathMatch(.*)*", component: NotFound }, // 404 page
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
