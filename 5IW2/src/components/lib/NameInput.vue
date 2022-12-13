<script setup>
defineProps({
  lastname: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <input
    @input="$emit('update:lastname', $event.target.value)"
    :value="lastname"
  />
  <input
    @input="$emit('update:firstname', $event.target.value)"
    :value="firstname"
  />
</template>
