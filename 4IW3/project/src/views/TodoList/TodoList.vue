<template>
  <div>
    <todo-list />
  </div>
</template>

<script>
import TodoList from "../../components/tp/TodoList/TpTodoList.vue";

export default {
  components: {
    TodoList,
  },
  name: "TodoListView",
};
</script>