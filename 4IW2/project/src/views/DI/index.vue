<template>
  <div>
    <h1>DI</h1>
    <tp-todo-list-container>
      <router-view />
    </tp-todo-list-container>
  </div>
</template>

<script>
import TpTodoListContainer from "../../components/TodoList/DependencyInjection/TpTodoListContainer.vue";

export default {
  name: "DI",
  components: {
    TpTodoListContainer,
  },
};
</script>