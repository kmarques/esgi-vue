<template>
  <li @click="$emit('edit', { completed: !item.completed })">
    <div
      :contenteditable="edit"
      @click.stop="edit = !edit"
      @keydown.enter.prevent="
        (event) => $emit('edit', { title: event.target.textContent.trim() })
      "
    >
      {{ item.title }}
    </div>
    {{ item.completed ? "completed" : "not" }}
    <button @click="$emit('delete')">X</button>
  </li>
</template>

<script>
export default {
  name: "TPTodoListItem",
  data: () => ({
    edit: false,
  }),
  props: {
    editTodo: Function,
    deleteTodo: Function,
    item: Object,
  },
};
</script>

<style>
</style>