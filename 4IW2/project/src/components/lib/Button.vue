<template>
  <button v-if="variant !== 'text'" v-bind:class="variant" v-on:click="onClick">
    {{ title }}
  </button>
  <a class="text" @click.alt="onCtrlClick" @click.exact="onClick" v-else>{{
    title
  }}</a>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
    variant: {
      type: String,
      default: "squared",
      validator: (val) => ["squared", "rounded", "text"].includes(val),
    },
    onClick: Function,
  },
  methods: {
    onCtrlClick: () => console.log("Alt click detected"),
  },
};
</script>

<style scoped>
.rounded {
  border-radius: 50%;
}
</style>