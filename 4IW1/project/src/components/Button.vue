<template>
  <button v-if="variant !== 'text'" v-bind:class="variant" v-on:click="onClick">
    {{ title }}
  </button>
  <a v-else @click="onClick">{{ title }}</a>
</template>

<script>
export default {
  name: "Button",
  props: {
    variant: {
      type: String,
      default: "squared",
      validator: (val) => ["squared", "rounded", "text"].includes(val),
    },
    title: String,
    onClick: Function,
  },
};
</script>

<style scoped>
.rounded {
  border-radius: 50%;
}
</style>