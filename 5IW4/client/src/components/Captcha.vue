<template>
  <div class="grid">
    <img
      :class="{ selected: option.id === value?.id }"
      v-for="option in options"
      :src="option.src"
      @click="handleClick(option)"
    />
  </div>
</template>

<script setup>
import { unref } from "vue";
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  value: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const emit = defineEmits({
  "update:value": function validate(value) {
    return typeof value === "object" && value.id && value.src;
  },
});

const handleClick = (option) => {
  emit("update:value", unref(option));
  //emit("toto", { target: { value: option, name: props.name } });
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
.selected {
  border: 5px solid magenta;
}
</style>
