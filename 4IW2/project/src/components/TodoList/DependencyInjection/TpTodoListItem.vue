<template>
  <li @click="$emit('edit', { ...todo, completed: !todo.completed })">
    {{ todo.title }} {{ todo.completed ? "(completed)" : "" }}
    <button @click.stop="$emit('delete', todo)">Delete</button>
  </li>
</template>

<script>
/** Créer un CRUD complet de TodoList */
export default {
  name: "TodoListItem",
  props: {
    todo: Object,
  },
};
</script>