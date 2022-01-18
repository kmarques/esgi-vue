export default {
  path: "props",
  component: () => import("../views/Props/index.vue"),
  children: [
    {
      path: "buttons",
      components: {
        default: () => import("../views/Props/Buttons.vue"),
        header: () => import("../views/Props/ButtonsHeader.vue"),
      },
    },
    {
      path: "collapse",
      components: {
        default: () => import("../views/Props/Collapse.vue"),
        header: () => import("../views/Props/CollapseHeader.vue"),
      },
    },
  ],
};
