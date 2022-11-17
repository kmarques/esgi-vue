<script setup>
defineProps(["firstname", "lastname"]);
</script>

<template>
  <div>
    <input
      type="text"
      :value="firstname"
      @input="$emit('update:firstname', $event.target.value)"
    />
    <input
      type="text"
      :value="lastname"
      @input="$emit('update:lastname', $event.target.value)"
    />
  </div>
</template>
