<script setup>
import { reactive } from "vue";
import Captcha from "./Captcha.vue";
import NameInput from "./NameInput.vue";
const formData = reactive({
  firstname: "test",
  lastname: "",
  captcha: null,
});

const emit = defineEmits(["submit"]);

const onSubmit = function (e) {
  console.log(formData);
  emit("submit", formData);
};

const handleChange = function (e) {
  formData[e.target.name] = e.target.value;
  //total += parseFloat(e.target.value);
};
const handleChangeCaptcha = function (value) {
  formData.captcha = value;
};

const options = [
  {
    id: 1,
    img: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    img: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    img: "https://picsum.photos/200?random=3",
  },
  {
    id: 4,
    img: "https://picsum.photos/200?random=4",
  },
  {
    id: 5,
    img: "https://picsum.photos/200?random=5",
  },
  {
    id: 6,
    img: "https://picsum.photos/200?random=6",
  },
];

function handletoto(value) {
  console.log("toto", value);
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <NameInput
      v-model:firstname="formData.firstname"
      v-model:lastname="formData.lastname"
    />
    <Captcha
      v-if="false"
      :captcha="formData.captcha"
      @update:captcha="handleChangeCaptcha"
      :options="options"
      name="captcha"
    />
    <Captcha
      v-model:captcha="formData.captcha"
      :options="options"
      name="captcha"
      @toto="handletoto"
    />
    <button type="submit">Submit</button>
  </form>
</template>

<!-- addEventListener('submit', ($event) => { 
    $event.preventDefault();
    $event.stopPropagation();

    if($event.ctrlKey) {
        if (callback is instruction) { 
            (new Function(callback))()
        } else { 
            callback($event) 
        }
    }
})-->
