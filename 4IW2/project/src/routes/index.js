import VueRouter from "vue-router";
import propsRouter from "./propsRouter";

const routes = [
  {
    path: "",
    component: () => import("../views/Home.vue"),
    children: [
      propsRouter,
      {
        path: "di",
        component: () => import("../views/DI/index.vue"),
        children: [
          {
            path: "",
            component: () => import("../views/DI/List.vue"),
          },
          {
            path: ":id",
            component: () => import("../views/DI/Item.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/backup",
    component: () => import("../views/Backup.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
