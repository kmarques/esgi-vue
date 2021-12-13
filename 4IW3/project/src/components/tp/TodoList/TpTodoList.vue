<template>
  <div>
    <Form @submit="addTodo" />
    <ul>
      <li :key="todo.id" v-for="todo in todos">
        <slot name="item" :item="todo">
          <Item @edit="editTodo" @delete="deleteTodo" :item="todo" />
        </slot>
      </li>
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
      todos: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => {
        this.todos = data;
      });
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
        .then((data) => {
          this.todos.push(data);
        });
    },
    editTodo(item) {
      const newObj = {
        ...item,
        completed: !item.completed,
      };
      fetch(`http://localhost:3000/todos/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newObj),
      })
        .then((response) => response.json())
        .then((data) => {
          this.todos.splice(this.todos.indexOf(item), 1, data);
        });
    },
    deleteTodo(item) {
      fetch(`http://localhost:3000/todos/${item.id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          this.todos.splice(this.todos.indexOf(item), 1);
        });
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