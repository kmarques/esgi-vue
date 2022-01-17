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
    todos: defaultTodos,
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
  computed: {
    provTodos: function () {
      return this.todos;
    },
  },
  provide() {
    return {
      todos: this.provTodos,
      todoList: {
        todos: this.provTodos,
        addTodo: this.addTodo,
        editTodo: this.editTodo,
        deleteTodo: this.deleteTodo,
        getTodos: () => this.provTodos,
        getTodo: (id) => this.todos.find((td) => td.id === id),
      },
    };
  },
};
</script>

<style>
</style>