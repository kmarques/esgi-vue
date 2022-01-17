import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import propsRouter from "./props";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      propsRouter,
      {
        path: "tp-todo-list",
        component: () => import("../views/TodoList/index.vue"),
        children: [
          {
            path: "",
            component: () => import("../views/TodoList/TodoList.vue"),
          },
          {
            path: ":id",
            name: "TodoListItem",
            component: () => import("../views/TodoList/TodoListItem.vue"),
          },
        ],
      },
      //{ path: "custom-event", component: CustomEvent },
      //{
      //  path: "slots",
      //  component: Slots,
      //  children: [
      //    { path: "modal", component: Modal },
      //    { path: "todo-list", component: TpTodoListSlot },
      //  ],
      //},
      //{ path: "di", component: Di },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
