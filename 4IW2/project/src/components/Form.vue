<template>
  <form @submit.prevent="handleSubmit">
    <input
      name="username"
      type="text"
      @keydown.prevent.stop.enter="avoidEnter"
      :value="username"
      @input="handleChange"
    />
    <input name="password" type="text" v-model="password" />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  name: "Form",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    handleChange: function (event) {
      this[event.target.name] = event.target.value;
    },
    handleSubmit: function (event) {
      const data = new FormData(event.target);
      console.log(data);
    },
    avoidEnter: () => console.log("Enter avoided"),
  },
};
</script>