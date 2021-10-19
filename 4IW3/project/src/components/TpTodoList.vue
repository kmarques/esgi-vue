<template>
  <div>
    <Form :onSubmit="addTodo" />
    <ul>
      <Item
        :key="todo.id"
        v-for="(todo, index) in todos"
        :onEdit="() => editTodo(index)"
        :onDelete="() => deleteTodo(index)"
        :item="todo"
      />
    </ul>
  </div>
</template>

<script>
import FormTodo from "./FormTodo.vue";
import ItemTodo from "./ItemTodo.vue";
// Faire un CRUD complet
export default {
  name: "TpTodoList",
  components: {
    Form: FormTodo,
    Item: ItemTodo,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Faire des courses",
          completed: false,
        },
        {
          id: 2,
          title: "Faire du sport",
          completed: false,
        },
        {
          id: 3,
          title: "Faire du shopping",
          completed: false,
        },
      ],
    };
  },
  methods: {
    addTodo(title) {
      this.todos.push({
        id: new Date().getTime(),
        title,
        completed: false,
      });
    },
    editTodo(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style>
.tp-todo-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>