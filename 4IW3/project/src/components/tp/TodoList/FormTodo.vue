<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="title" />
    <button type="submit">Add todo</button>
  </form>
</template>

<script>
export default {
  name: "FormTodo",
  props: {},
  data: () => ({
    title: "",
  }),
  methods: {
    handleSubmit() {
      this.$emit("submit", this.title);
      this.title = "";
    },
  },
};
</script>

<style>
</style>