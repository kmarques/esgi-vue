<script setup>
import { ref } from "vue";
const lastname = ref("");
const firstname = ref("");

function handleChange(e) {
  switch (e.target.name) {
    case "lastname":
      lastname.value = e.target.value;
      break;
    case "firstname":
      firstname.value = e.target.value;
      break;
  }
}

function onSubmit(e) {
  console.log({ lastname: lastname.value, firstname: firstname.value });
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input
      @input="handleChange"
      :value="firstname"
      type="text"
      name="firstname"
    />
    <input v-model="lastname" type="text" name="lastname" />
    <input type="submit" value="Save" />
  </form>
</template>
