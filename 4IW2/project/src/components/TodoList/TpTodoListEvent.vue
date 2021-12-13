<template>
  <div>
    <input @keydown.enter.prevent="(event) => addTodo(event.target.value)" />
    <ul>
      <tp-todo-list-event-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @edit="editTodo"
        @delete="deleteTodo"
      />
    </ul>
  </div>
</template>

<script>
import TpTodoListEventItem from "./TodoList/TpTodoListEventItem.vue";
/** Créer un CRUD complet de TodoList */
export default {
  components: { TpTodoListEventItem },
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