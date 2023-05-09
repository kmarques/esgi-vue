<template>
  <div class="grid">
    <img
      :src="option.href"
      :alt="option.id"
      :key="option.id"
      @click="$emit('update:modelValue', option)"
      :class="{
        selected: option.id === modelValue?.id,
      }"
      v-for="option in options"
    />
  </div>
</template>

<script setup>
defineProps({
  options: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 1rem 0;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

img.selected {
  border: 4px solid darkorange;
}
</style>
