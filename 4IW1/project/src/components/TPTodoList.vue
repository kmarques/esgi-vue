<template>
  <div>
    <input v-model="title" @keyup.enter="addTodo" />
    <ul v-for="(todo, index) in todos" :key="todo.id">
      <li @click="editTodo({ completed: !todos[index].completed }, index)">
        <div
          :contenteditable="todo.edit"
          @click.stop="toggleEdit(index)"
          @keydown.enter.prevent="
            (event) =>
              editTodo({ title: event.target.textContent.trim() }, index)
          "
        >
          {{ todo.title }}
        </div>
        {{ todo.completed ? "completed" : "not" }}
        <button @click="deleteTodo(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
/** Créer un CRUD complet de TodoList */
const defaultTodos = [
  {
    id: Date.now(),
    title: "Test 1",
    completed: false,
    edit: false,
  },
  {
    id: Date.now(),
    title: "Test 2",
    completed: false,
    edit: false,
  },
  {
    id: Date.now(),
    title: "Test 3",
    completed: false,
    edit: false,
  },
];
export default {
  name: "TPTodoList",
  data: () => ({
    title: "",
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
        edit: false,
      });
    },
    toggleEdit: function (index) {
      !this.todos[index].edit &&
        (this.todos[index].edit = !this.todos[index].edit);
    },
    editTodo: function (values, index) {
      this.todos[index] = { ...this.todos[index], ...values };
      this.todos[index].edit = false;
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style>
</style>