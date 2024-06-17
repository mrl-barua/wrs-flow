import { createApp } from "vue";
import "./css/style.css";
import Swal from "sweetalert2";
import App from "./App.vue";
import router from "./router.ts";

createApp(App).use(router).mount("#app");
