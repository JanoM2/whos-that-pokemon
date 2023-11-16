import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./css/styles.css";
import "./css/animations.css";

createApp(App).use(store).use(router).mount("#app");
