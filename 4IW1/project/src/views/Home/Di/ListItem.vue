<template>
  <h3>{{ item.title }}</h3>
</template>

<script>
export default {
  computed: {
    item: function () {
      return this.todoList.getTodo(parseInt(this.$route.params.id));
    },
  },
  inject: ["todoList"],
};
</script>