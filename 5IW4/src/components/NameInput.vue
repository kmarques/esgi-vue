<template>
  <input
    :value="lastname"
    @input="$emit('update:lastname', $event.target.value)"
    type="text"
    name="lastname"
  />
  <input
    :value="firstname"
    @input="$emit('update:firstname', $event.target.value)"
    type="text"
    name="lastname"
  />
</template>

<script setup>
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
