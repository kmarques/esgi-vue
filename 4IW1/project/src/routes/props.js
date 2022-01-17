export default {
  path: "props",
  component: () => import("../views/Home/Props/index.vue"),
  children: [
    {
      path: "buttons",
      components: {
        default: () => import("../views/Home/Props/Buttons.vue"),
        header: () => import("../views/Home/Props/ButtonsHeader.vue"),
      },
    },
    {
      path: "list",
      components: {
        default: () => import("../views/Home/Props/List.vue"),
        header: () => import("../views/Home/Props/ListHeader.vue"),
      },
    },
  ],
};
