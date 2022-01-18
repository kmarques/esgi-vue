<template>
  <div>
    <h3>{{ todo.title }}</h3>
    <button @click="$router.go(-1)">Go back</button>
  </div>
</template>

<script>
export default {
  inject: ["todoManager"],
  computed: {
    todo: function () {
      return this.todoManager.get(parseInt(this.$route.params.id, 10));
    },
  },
};
</script>