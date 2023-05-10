<script setup>
import { reactive } from "vue";
import Captcha from "./lib/Captcha.vue";
import NameInput from "./lib/NameInput.vue";

//defineEmits(["change"]);
const $emit = defineEmits({
  submit: (eventData) => {
    return eventData.lastname && eventData.firstname && eventData.captcha;
  },
});

const userData = reactive({
  lastname: "",
  firstname: "",
  captcha: null,
});

const handleChange = function (e) {
  userData[e.target.name] = e.target.value;
};

const onSubmit = function () {
  $emit("submit", userData);
};

const options = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  href: `https://picsum.photos/200?random=${i}`,
}));
</script>

<template>
  <form @submit.prevent="onSubmit">
    <NameInput
      v-model:lastname="userData.lastname"
      v-model:firstname="userData.firstname"
    />
    <Captcha
      v-model:value="userData.captcha"
      name="captcha"
      :options="options"
    />
    <button type="submit">Submit</button>
  </form>
</template>
