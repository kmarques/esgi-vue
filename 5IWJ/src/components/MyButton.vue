<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "blue",
    validator: (value) => {
      return ["blue", "red", "green"].includes(value);
    },
  },
  onClick: {
    type: Function,
    required: true,
  },
});

const buttonStyle = computed(() => ({
  color: "magenta",
  "background-color": props.color,
  "border-radius": props.rounded ? "50%" : 0,
}));

const alert = (title, event) => {
  window.alert("You clicked me!");
  props.onClick();
};
</script>

<!--
Vue 3 Composition API verbose
<script>
import { computed } from "vue";

export default {
  name: "MyButton",
  props: {
    title: {
      type: String,
      required: true,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "blue",
      validator: (value) => {
        return ["blue", "red", "green"].includes(value);
      },
    },
  },
  setup() {
    const buttonStyle = computed(() => ({
        "background-color": this.color,
        "border-radius": this.rounded ? "50%" : 0,
    }));
    const alert = (title, event) => {
        window.alert("You clicked me!");
        this.onClick();
    };
    return { buttonStyle, alert };
  },
};
</script>
-->

<template>
  <button :style="buttonStyle" @click="alert('test', $event)">
    {{ title }}
  </button>
</template>
