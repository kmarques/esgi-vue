<template>
  <form @submit.prevent="handleSubmit">
    <input
      @keydown.prevent.enter
      name="username"
      type="text"
      :value="username"
      @input="handleChange"
    />
    <input type="text" v-model="password" />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  name: "Form",
  data: () => ({ username: "", password: "" }),
  methods: {
    handleChange: function (event) {
      this[event.target.name] = event.target.value;
    },
    handleSubmit: function (event) {
      const data = new FormData(event.target);
      console.log(data);
    },
  },
};
</script>

<style>
</style>