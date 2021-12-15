<template>
  <div>
    <input v-model="title" @keyup.enter="addTodo" />
    <ul>
      <tp-todo-list-item
        @edit="(values) => editTodo(values, index)"
        @delete="() => deleteTodo(index)"
        v-for="(todo, index) in todos"
        :key="todo.id"
        :item="todo"
      />
    </ul>
  </div>
</template>

<script>
import TpTodoListItem from "./TPTodoListItem.vue";
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
  components: { TpTodoListItem },
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
      });
    },
    editTodo: function (values, index) {
      console.log(values, index);
      this.todos.splice(index, 1, { ...this.todos[index], ...values });
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style>
</style>