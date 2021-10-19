<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="title" />
    <button type="submit">Add todo</button>
  </form>
</template>

<script>
export default {
  name: "FormTodo",
  props: {
    onSubmit: Function,
  },
  data: () => ({
    title: "",
  }),
  methods: {
    handleSubmit() {
      this.onSubmit(this.title);
      this.title = "";
    },
  },
};
</script>

<style>
</style>