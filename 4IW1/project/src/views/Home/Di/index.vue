<template>
  <div>
    <h2>Di</h2>
    <TPTodoListContainer>
      <router-view />
    </TPTodoListContainer>
  </div>
</template>

<script>
import TPTodoListContainer from "../../../components/TodoList/DependencyInjection/TPTodoListContainer.vue";
export default {
  components: { TPTodoListContainer },
};
</script>