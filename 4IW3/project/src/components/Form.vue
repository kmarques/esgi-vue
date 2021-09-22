<template>
  <form @submit.prevent="handleSubmit">
    <input
      name="username"
      :value="username"
      @keydown.prevent.enter=""
      @input="handleChange"
    />
    <input v-model.trim="password" />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    handleChange: function (event) {
      this[event.target.name] = event.target.value;
    },
    handleSubmit: function () {
      const { username, password } = this.$data;
      console.log({ username, password });
    },
  },
};
</script>

<style>
</style>