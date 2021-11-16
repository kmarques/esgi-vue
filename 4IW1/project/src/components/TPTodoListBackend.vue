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
        <button @click.stop="deleteTodo(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
/** Créer un CRUD complet de TodoList */

export default {
  name: "TPTodoList",
  data: () => ({
    title: "",
    todos: [],
  }),
  mounted() {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => {
        this.todos = data;
      });
  },
  methods: {
    addTodo: function () {
      fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          completed: false,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.todos.push({ ...data, edit: false });
          this.title = "";
        });
    },
    toggleEdit: function (index) {
      !this.todos[index].edit &&
        (this.todos[index].edit = !this.todos[index].edit);
    },
    editTodo: function (values, index) {
      const { edit, ...oldTodo } = this.todos[index];
      console.log(edit);
      fetch(`http://localhost:3000/todos/${this.todos[index].id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...oldTodo, ...values }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.todos.splice(index, 1, data);
          this.todos[index].edit = false;
        });
    },
    deleteTodo: function (index) {
      fetch(`http://localhost:3000/todos/${this.todos[index].id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          this.todos.splice(index, 1);
        });
    },
  },
};
</script>

<style>
</style>