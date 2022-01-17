import Props from "../views/Props/Props.vue";
import Buttons from "../views/Props/Buttons.vue";
import Collapse from "../views/Props/Collapse.vue";
import ButtonsHeader from "../views/Props/ButtonsHeader.vue";
import CollapseHeader from "../views/Props/CollapseHeader.vue";

export default {
  path: "props",
  component: Props,
  children: [
    {
      path: "buttons",
      components: { default: Buttons, header: ButtonsHeader },
    },
    {
      path: "collapse",
      components: { default: Collapse, header: CollapseHeader },
    },
  ],
};
