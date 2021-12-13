<template>
  <li>
    <span
      :style="{ color: item.completed ? 'green' : 'red' }"
      @click="onEdit"
      >{{ item.title }}</span
    >
    <button @click="onDelete">X</button>
  </li>
</template>

<script>
export default {
  name: "ItemTodo",
  props: {
    item: Object,
  },
  methods: {
    onEdit() {
      this.$emit("edit", this.item);
    },
    onDelete() {
      this.$emit("delete", this.item);
    },
  },
};
</script>

<style>
</style>