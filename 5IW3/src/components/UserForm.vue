<script setup>
import { reactive } from "vue";
const formData = reactive({
  firstname: "test",
  lastname: "",
});

const onSubmit = function (e) {
  console.log(formData);
};

const handleChange = function (e) {
  formData[e.target.name] = e.target.value.trim();
  //total += parseFloat(e.target.value);
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input
      @input="handleChange"
      :value="formData.firstname"
      type="text"
      name="firstname"
    />
    <input
      v-model.number.trim.lazy="formData.lastname"
      type="text"
      name="lastname"
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
