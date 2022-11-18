<template>
  <div class="grid">
    <img
      :class="{ selected: value?.id === option.id }"
      :src="option.src"
      :key="option.id"
      v-for="option in options"
      @click="$emit('update:value', option)"
    />
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
.selected {
  border: 5px solid cyan;
}
</style>
