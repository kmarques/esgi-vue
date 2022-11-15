<script setup>
import { reactive } from "vue";

const userData = reactive({
  lastname: "",
  firstname: "",
});

const handleChange = function (e) {
  userData[e.target.name] = parseFloat(e.target.value.trim());
};

const onSubmit = function () {
  console.log(userData);
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input
      @input="handleChange"
      :value="userData.lastname"
      type="text"
      name="lastname"
    />
    <input
      v-model.trim.number.lazy="userData.firstname"
      type="text"
      name="firstname"
    />
    <button type="submit">Submit</button>
  </form>
</template>
