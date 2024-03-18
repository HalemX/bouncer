import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";

import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

import App from "./App.vue";

// Bootstrap
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Import Router
import router from "./router";

// Import store >= (Vuex)
import store from "./store/index";

const app = createApp(App);

app.use(router).use(store).use(MotionPlugin).use(ToastPlugin).mount("#app");
