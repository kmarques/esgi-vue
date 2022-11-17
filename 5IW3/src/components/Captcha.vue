<script setup>
defineProps({
  captcha: {
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

const emit = defineEmits({
  "update:captcha": function validator(value) {
    return typeof value === "object" && value.id && value.img;
  },
  toto: () => true,
});

function handleClick(value) {
  emit("update:captcha", value);
}
function handleAltClick(value) {
  emit("toto", value);
}
</script>

<template>
  <div class="grid">
    <div
      :class="['grid-item', { selected: modelValue?.id === option.id }]"
      v-for="option in options"
    >
      <!--img :src="option.img" @click="$emit('update:modelValue', option)" /-->
      <img
        :src="option.img"
        @click.exact="handleClick(option)"
        @click.prevent.alt.exact="handleAltClick(option)"
      />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-items: space-around;
}
.grid-item {
  width: 30%;
}

.selected {
  border: 10px dashed magenta;
}
</style>
