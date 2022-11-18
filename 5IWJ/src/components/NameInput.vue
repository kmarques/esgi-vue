<template>
  <input
    :value="firstname"
    @input="$emit('update:firstname', $event.target.value)"
    type="text"
  />
  <input
    :value="lastname"
    @input="$emit('update:lastname', $event.target.value)"
    type="text"
  />
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});
</script>
