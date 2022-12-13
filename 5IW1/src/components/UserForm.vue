<script setup>
import { ref } from "vue";
import Captcha from "./lib/Captcha.vue";
import NameInput from "./lib/NameInput.vue";
const lastname = ref("");
const firstname = ref("");
const captcha = ref(null);

function handleChange(e) {
  switch (e.target.name) {
    case "lastname":
      lastname.value = e.target.value;
      break;
    case "firstname":
      firstname.value = e.target.value;
      break;
    case "captcha":
      captcha.value = e.target.value;
      break;
  }
}
//const $emit = defineEmits(["submit"]);
const $emit = defineEmits({
  submit: (data) => {
    return (
      data.lastname !== "" && data.firstname !== "" && data.captcha !== null
    );
  },
});

function onSubmit() {
  $emit("submit", {
    lastname: lastname.value,
    firstname: firstname.value,
    captcha: captcha.value,
  });
}

const options = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  href: `https://picsum.photos/200?random=${i}`,
}));
</script>

<template>
  <form @submit.prevent="onSubmit">
    <NameInput v-model:firstname="firstname" v-model:lastname="lastname" />
    <input type="submit" value="Save" />
    <Captcha v-model="captcha" name="captcha" :options="options" />
  </form>
</template>
