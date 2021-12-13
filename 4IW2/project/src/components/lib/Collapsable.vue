<template>
  <div>
    <div @click="open = !open" class="title">{{ title }}</div>
    <div v-show="open" class="body">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    defaultBehavior: {
      type: String,
      default: "closed",
      validator: (val) => ["opened", "closed"].includes(val),
    },
  },
  data: function () {
    return {
      open: this.defaultBehavior === "opened",
    };
  },
};
</script>