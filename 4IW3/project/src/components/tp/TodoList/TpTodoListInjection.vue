<template>
  <div>
    <Form @submit="todoManager.addTodo" />
    <ul>
      <li :key="todo.id" v-for="todo in todos">
        <slot name="item" :item="todo">
          <Item
            @edit="todoManager.editTodo"
            @delete="todoManager.deleteTodo"
            :item="todo"
          />
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
  name: "TpTodoListInjection",
  components: {
    Form: FormTodo,
    Item: ItemTodo,
  },
  inject: ["todoManager"],
  computed: {
    todos() {
      return this.todoManager.todos;
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