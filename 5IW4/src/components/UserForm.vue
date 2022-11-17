<script setup>
import { ref } from "vue";
import Captcha from "./Captcha.vue";
import NameInput from "./NameInput.vue";

const firstname = ref("");
const lastname = ref("");
const captcha = ref(null);

const emit = defineEmits(["submit"]);

function onSubmit(e) {
  emit("submit", {
    firstname: firstname.value,
    lastname: lastname.value,
    captcha: captcha.value,
  });
}

function onChange({ target: { name, value } }) {
  switch (name) {
    case "firstname":
      firstname.value = value;
      break;
    case "lastname":
      lastname.value = value;
      break;
    case "captcha":
      captcha.value = value;
      break;
  }
}

const options = [
  {
    id: 1,
    src: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    src: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    src: "https://picsum.photos/200?random=3",
  },
  {
    id: 4,
    src: "https://picsum.photos/200?random=4",
  },
  {
    id: 5,
    src: "https://picsum.photos/200?random=5",
  },
  {
    id: 6,
    src: "https://picsum.photos/200?random=6",
  },
  {
    id: 7,
    src: "https://picsum.photos/200?random=7",
  },
  {
    id: 8,
    src: "https://picsum.photos/200?random=8",
  },
  {
    id: 9,
    src: "https://picsum.photos/200?random=9",
  },
];
</script>

<template>
  <form @submit.prevent.stop="onSubmit">
    <NameInput v-model:lastname="lastname" v-model:firstname="firstname" />
    <Captcha
      v-if="false"
      name="captcha"
      :options="options"
      :value="captcha"
      @input="onChange"
    />
    <Captcha
      name="captcha"
      :options="options"
      v-model:value="captcha"
      @toto="onChange"
    />
    <button type="submit">Save</button>
  </form>
</template>
