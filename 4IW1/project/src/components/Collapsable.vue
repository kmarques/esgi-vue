<template>
  <div>
    <div @click="opened = !opened" class="title">{{ title }}</div>
    <div v-show="opened" class="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "Collapsable",
  props: {
    title: String,
    description: String,
    defaultBehaviour: {
      type: String,
      default: "closed",
      validator: (val) => ["opened", "closed"].includes(val),
    },
  },
  data: function () {
    return { opened: this.defaultBehaviour === "opened" };
  },
};
</script>

<style>
</style>