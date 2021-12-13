<template>
  <div>
    <input
      @keydown.enter.prevent="
        (event) => todoManager.addTodo(event.target.value)
      "
    />
    <ul>
      <tp-todo-list-event-item
        v-for="todo in localTodos"
        :key="todo.id"
        :todo="todo"
        @edit="todoManager.editTodo"
        @delete="todoManager.deleteTodo"
      />
    </ul>
  </div>
</template>

<script>
import TpTodoListEventItem from "./TpTodoListItem.vue";
/** Créer un CRUD complet de TodoList */
export default {
  components: { TpTodoListEventItem },
  name: "TodoList",
  inject: ["todoManager", "todos"],
  computed: {
    localTodos() {
      return this.todos;
    },
  },
};
</script>