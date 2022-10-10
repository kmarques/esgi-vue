<script setup>
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

function handleClick(type, event) {
  console.log(event);
  console.log("click");
  props.onClick();
}

console.log(props);
</script>

<!--
    Options API
<script>
export default {
    name: 'Button',
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
            default: 'blue',
            validator: (value) => {
                return ['blue', 'red', 'green'].includes(value);
            },
        },
    },
    methods: {
        handleClick() {
            console.log('click');
        },
    },
}
</script>
-->

<template>
  <button
    :style="{
      color,
      borderRadius: rounded ? '50%' : '0',
    }"
    @click="handleClick('test', $event)"
  >
    {{ title }}
  </button>
</template>

<!--
<template>
    <button
      v-bind:style="{
        color,
        borderRadius: rounded ? '50%' : '0',
      }"
      v-on:click="handleClick('test', $event)"
    >
      {{ title }}
    </button>
  </template>
  -->
