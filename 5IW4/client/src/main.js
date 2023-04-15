import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import Tracker from "./plugin/Tracker";

const app = createApp(App);

app.use(Tracker, {
  APP_ID: "5IW4",
  idleTimeout: 15 * 60 * 1000,
});

app.mount("#app");
