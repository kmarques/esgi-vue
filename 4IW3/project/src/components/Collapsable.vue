<template>
  <div>
    <div @click="open = !open" class="title">{{ title }}</div>
    <div v-show="open" class="description">{{ description }}</div>
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
    return { open: this.defaultBehaviour === "opened" };
  },
};
</script>