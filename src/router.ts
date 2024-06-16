import { createMemoryHistory, createRouter } from "vue-router";

import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue"; // 404 page

const routes = [
  { path: "/", component: Login },
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/:pathMatch(.*)*", component: NotFound }, // 404 page
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
