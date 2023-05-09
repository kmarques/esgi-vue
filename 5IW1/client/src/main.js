import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import tracker from "./plugins/tracker";

const app = createApp(App);

app.use(tracker, {
  APP_ID: "5IW1",
  //router
});

app.mount("#app");
