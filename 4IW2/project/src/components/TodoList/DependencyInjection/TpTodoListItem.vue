<template>
  <li @click="$emit('edit', { ...todo, completed: !todo.completed })">
    {{ todo.title }} {{ todo.completed ? "(completed)" : "" }}
    <button @click.stop="$emit('delete', todo)">Delete</button>
    <button @click.stop="$router.push('/di/' + todo.id)">Show</button>
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