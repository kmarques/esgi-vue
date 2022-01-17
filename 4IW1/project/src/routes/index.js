import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import propsRouter from "./props";

const routes = [
  {
    path: "",
    component: Home,
    children: [
      propsRouter,
      //{ path: "data", component: () => import("../views/Home/Data.vue") },
      //{ path: "tp", component: () => import("../views/Home/Tp.vue") },
      //{
      //  path: "custom-event",
      //  component: () => import("../views/Home/CustomEvent.vue"),
      //},
      //{
      //  path: "slots",
      //  component: () => import("../views/Home/Slots.vue"),
      //},
      {
        path: "di",
        component: () => import("../views/Home/Di/index.vue"),
        children: [
          { path: "", component: () => import("../views/Home/Di/List.vue") },
          {
            path: ":id",
            component: () => import("../views/Home/Di/ListItem.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/backup",
    name: "Backup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeBackup.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
