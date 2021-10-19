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
    onEdit: Function,
    onDelete: Function,
    item: Object,
  },
};
</script>

<style>
</style>