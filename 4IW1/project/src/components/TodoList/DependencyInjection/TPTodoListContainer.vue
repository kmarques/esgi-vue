<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
/** Créer un CRUD complet de TodoList */
const defaultTodos = [
  {
    id: Date.now(),
    title: "Test 1",
    completed: false,
  },
  {
    id: Date.now(),
    title: "Test 2",
    completed: false,
  },
  {
    id: Date.now(),
    title: "Test 3",
    completed: false,
  },
];
export default {
  name: "TPTodoListContainer",
  data: () => ({
    todos: [],
  }),
  mounted() {
    this.todos = defaultTodos;
  },
  methods: {
    addTodo: function (event) {
      this.todos.push({
        id: Date.now(),
        title: event.target.value,
        completed: false,
      });
    },
    editTodo: function (values) {
      this.todos.splice(
        this.todos.findIndex((item) => values.id === item.id),
        1,
        values
      );
    },
    deleteTodo: function (todo) {
      this.todos.splice(
        this.todos.findIndex((item) => todo.id === item.id),
        1
      );
    },
  },
  provide() {
    return {
      todoList: {
        todos: this.todos,
        addTodo: this.addTodo,
        editTodo: this.editTodo,
        deleteTodo: this.deleteTodo,
      },
    };
  },
};
</script>

<style>
</style>