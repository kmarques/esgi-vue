<template>
  <div>
    <span v-if="todo === null">Loading...</span>
    <span v-else>{{ todo.title }}</span>
    <button @click="$router.go(-1)">Go Back</button>
  </div>
</template>

<script>
export default {
  name: "TodoListItemView",
  data: function () {
    return {
      todo: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/todos/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => {
        this.todo = data;
      });
  },
};
</script>