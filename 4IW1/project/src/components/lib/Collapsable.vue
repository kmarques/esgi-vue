<template>
  <div>
    <div @click="opened = !opened" class="title">
      <slot name="title" :isOpen="opened"> Title </slot>
    </div>
    <div v-show="opened" class="description">
      <slot name="description">
        <p>Description</p>
      </slot>
    </div>
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