<template>
  <div><slot></slot></div>
</template>

<script>
export default {
  name: "TodoListContainer",
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
  provide() {
    return {
      todoManager: {
        todos: this.todos,
        getTodos() {
          return this.todos;
        },
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
  },
};
</script>