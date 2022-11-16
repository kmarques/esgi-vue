<script setup>
import { ref } from "vue";

const firstname = ref("");
const lastname = ref("");

function onSubmit(e) {
  console.log({
    firstname: firstname.value,
    lastname: lastname.value,
  });
}

function onChange(e) {
  switch (e.target.name) {
    case "firstname":
      firstname.value = e.target.value;
      break;
    case "lastname":
      lastname.value = e.target.value;
      break;
  }
}
</script>

<template>
  <form @submit.prevent.stop="onSubmit">
    <input :value="firstname" @input="onChange" type="text" name="firstname" />
    <input v-model="lastname" type="text" name="lastname" />
    <button type="submit">Save</button>
  </form>
</template>
