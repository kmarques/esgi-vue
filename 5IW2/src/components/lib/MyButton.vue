<template>
  <button
    v-bind:style="buttonStyle"
    v-on:click="handleClick"
    v-on:dblclick="onClick"
  >
    {{ title }}
  </button>
</template>

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
    validator: (value) => {
      return ["blue", "red", "green"].includes(value);
    },
  },
});

function handleClick($event) {
  window.alert("Hello");
  props.onClick();
}
const buttonStyle = computed(() => {
  return {
    backgroundColor: props.color,
    borderRadius: props.rounded ? "50%" : "0",
  };
});
</script>

<!--
    Vue 3 Composition API
<script>
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
  setup(props) {
    function alert($event) {
      window.alert("Hello");
    }
    return {
      alert,
    };
  },
};
</script>
-->

<!--
    Vue 2 ou Vue 3 Options API
<script>
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
  methods: {
    alert($event) {
      window.alert("Hello");
    },
  }
};
</script>
-->
