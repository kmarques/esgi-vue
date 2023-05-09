import { createApp } from "vue";
import App from "./App.vue";
import Tracker from "./plugins/Tracker";

import "./assets/main.css";

const app = createApp(App);
app.use(Tracker, {
  APP_ID: "5IW3",
  service: "frontend2",
});

app.mount("#app");
