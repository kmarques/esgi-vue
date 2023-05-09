<template>
  <input
    @input="$emit('update:firstname', $event.target.value)"
    :value="firstname"
    type="text"
    name="firstname"
  />
  <input
    @input="$emit('update:lastname', $event.target.value)"
    :value="lastname"
    type="text"
    name="lastname"
  />
</template>

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
defineEmits({
  "update:firstname": (value) => value.length > 4,
});
</script>
