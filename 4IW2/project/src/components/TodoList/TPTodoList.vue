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
      this.todos.push({
        id: Date.now(),
        title,
        completed: false,
      });
    },
    editTodo(todo) {
      this.todos.splice(
        this.todos.findIndex((item) => todo.id === item.id),
        1,
        todo
      );
    },
    deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
  mounted() {
    this.todos = [
      {
        id: 1,
        title: "Learn Vue",
        completed: false,
      },
      {
        id: 2,
        title: "Learn Vue Router",
        completed: false,
      },
      {
        id: 3,
        title: "Learn Vuex",
        completed: false,
      },
    ];
  },
};
</script>