<script setup>
import { computed, reactive } from "vue";

const userFormData = reactive({
  firstname: "",
  lastname: "",
});

const handleChange = function (e) {
  userFormData[e.target.name] = e.target.value.trim();
};

const onSubmit = function (e) {
  console.log(userFormData);
};
</script>

<template>
  <form @submit="onSubmit">
    <input
      :value="userFormData.firstname"
      @input="handleChange"
      type="text"
      name="firstname"
    />
    <input v-model.trim="userFormData.lastname" type="text" name="lastname" />
    <button type="submit">Submit</button>
  </form>
</template>
