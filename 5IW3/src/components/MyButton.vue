<script setup>
import { computed } from "vue";
const props = defineProps({
  onClick: {
    type: Function,
    required: true,
  },
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
    validator(value) {
      return ["blue", "red", "green"].includes(value);
    },
  },
});

function handleClick() {
  console.log("test");
  props.onClick();
}

const buttonStyle = computed(() => {
  return {
    backgroundColor: props.color,
    borderRadius: props.rounded ? "50%" : "0",
    color: "cyan",
  };
});
</script>

<template>
  <button :style="buttonStyle" @click="handleClick">
    {{ title }}
  </button>
</template>
