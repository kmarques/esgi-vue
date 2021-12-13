<template>
  <div>
    <input @keydown.enter.prevent="(event) => addTodo(event.target.value)" />
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        @click="editTodo({ ...todo, completed: !todo.completed })"
      >
        {{ todo.title }} {{ todo.completed ? "(completed)" : "" }}
        <button @click.stop="deleteTodo(todo)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
/** Créer un CRUD complet de TodoList */
export default {
  name: "TodoList",
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(title) {
      fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          completed: false,
        }),
      })
        .then((response) => response.json())
        .then((todo) => {
          this.todos.push(todo);
        });
    },
    editTodo(todo) {
      fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      })
        .then((response) => response.json())
        .then((todo) => {
          this.todos.splice(
            this.todos.findIndex((item) => todo.id === item.id),
            1,
            todo
          );
        });
    },
    deleteTodo(todo) {
      fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          this.todos.splice(this.todos.indexOf(todo), 1);
        });
    },
  },
  mounted() {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => {
        this.todos = data;
      });
  },
};
</script>