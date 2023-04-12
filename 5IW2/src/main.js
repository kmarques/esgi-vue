import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import Tracker from "./plugins/Tracker";

const app = createApp(App);

app.use(Tracker, {
  AppId: "fqsdghnh",
});

app.mount("#app");
