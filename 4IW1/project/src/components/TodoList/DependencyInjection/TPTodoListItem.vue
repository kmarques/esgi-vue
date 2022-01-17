<template>
  <li @click="todoList.editTodo({ ...item, completed: !item.completed })">
    <div
      :contenteditable="edit"
      @click.stop="edit = !edit"
      @keydown.enter.prevent="
        (event) =>
          todoList.editTodo({ ...item, title: event.target.textContent.trim() })
      "
    >
      {{ item.title }}
    </div>
    {{ item.completed ? "completed" : "not" }}
    <button @click="todoList.deleteTodo(item)">X</button>
    <button @click="$router.push('/di/' + item.id)">Show</button>
  </li>
</template>

<script>
export default {
  name: "TPTodoListItem",
  data: () => ({
    edit: false,
  }),
  props: {
    item: Object,
  },
  inject: ["todoList"],
};
</script>

<style>
</style>