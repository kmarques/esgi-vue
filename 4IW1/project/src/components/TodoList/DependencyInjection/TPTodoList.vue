<template>
  <div>
    <input v-model="title" @keyup.enter="todoList.addTodo" />
    <ul>
      <tp-todo-list-item
        v-for="todo in todoList.todos"
        :key="todo.id"
        :item="todo"
      />
    </ul>
  </div>
</template>

<script>
import TpTodoListItem from "./TPTodoListItem.vue";
/** Créer un CRUD complet de TodoList */

export default {
  components: { TpTodoListItem },
  name: "TPTodoList",
  data: () => ({
    title: "",
  }),
  inject: ["todoList"],
};
</script>

<style>
</style>