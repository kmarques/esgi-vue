<template>
  <div>
    <input
      v-model="title"
      @keyup.enter="
        todos.push({
          id: Date.now(),
          title: title,
          completed: false,
          edit: false,
        });
        title = '';
      "
    />
    <ul v-for="(todo, index) in todos" :key="todo.id">
      <li @click="todos[index].completed = !todos[index].completed">
        <div
          :contenteditable="todo.edit"
          @click.stop="
            !todos[index].edit && (todos[index].edit = !todos[index].edit)
          "
          @keydown.enter.prevent="
            (event) => (todos[index].title = event.target.textContent)
          "
        >
          {{ todo.title }}
        </div>
        {{ todo.completed ? "completed" : "not" }}
        <button @click="todos.splice(index, 1)">X</button>
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
};
</script>

<style>
</style>