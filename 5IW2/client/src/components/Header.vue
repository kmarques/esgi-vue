<template>
  <h1 :style="headerStyle">
    {{ title }}
  </h1>
</template>

<script setup>
import {
  onMounted,
  onBeforeMount,
  onUpdated,
  onBeforeUpdate,
  onBeforeUnmount,
  onUnmounted,
  watch,
  computed,
} from "vue";

onMounted(() => {
  console.log("mounted");
});

onBeforeMount(() => {
  console.log("before mount");
});

onUpdated(() => {
  console.log("updated");
});

onBeforeUpdate(() => {
  console.log("before update");
});

onBeforeUnmount(() => {
  console.log("before unmount");
});

onUnmounted(() => {
  console.log("unmounted");
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isGreen: {
    type: Boolean,
    default: false,
  },
});

watch(
  () => props.isGreen,
  (newValue, oldValue) => {
    console.log("isGreen changed", newValue, oldValue);
  }
);

const headerStyle = computed(() => {
  return {
    backgroundColor: props.isGreen ? "green" : "blue",
    color: "white",
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
