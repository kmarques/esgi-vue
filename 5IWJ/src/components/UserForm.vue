<script setup>
import { computed, reactive, toRaw } from "vue";
import Captcha from "./Captcha.vue";
import NameInput from "./NameInput.vue";

const userFormData = reactive({
  firstname: "",
  lastname: "",
  captcha: null,
});

const handleChange = function (e) {
  userFormData[e.target.name] = e.target.value;
};

const onSubmit = function (e) {
  emit("submit", toRaw(userFormData));
};

const emit = defineEmits({
  submit: (userFormData) => {
    return (
      typeof userFormData === "object" &&
      userFormData.lastname &&
      userFormData.firstname
    );
  },
});

const options = computed(() => [
  { id: 1, src: "https://picsum.photos/200?random=" + 1 },
  { id: 2, src: "https://picsum.photos/200?random=" + 2 },
  { id: 3, src: "https://picsum.photos/200?random=" + 3 },
  { id: 4, src: "https://picsum.photos/200?random=" + 4 },
  { id: 5, src: "https://picsum.photos/200?random=" + 5 },
  { id: 6, src: "https://picsum.photos/200?random=" + 6 },
  { id: 7, src: "https://picsum.photos/200?random=" + 7 },
  { id: 8, src: "https://picsum.photos/200?random=" + 8 },
  { id: 9, src: "https://picsum.photos/200?random=" + 9 },
]);
</script>

<template>
  <form @submit.prevent="onSubmit">
    <NameInput
      v-model:firstname="userFormData.firstname"
      v-model:lastname="userFormData.lastname"
    />
    <!-- Captcha
      :value="userFormData.captcha"
      @input="handleChange"
      :options="options"
      name="captcha"
    /-->
    <Captcha
      v-model:value="userFormData.captcha"
      :options="options"
      name="captcha"
    />
    <button type="submit">Submit</button>
  </form>
</template>
