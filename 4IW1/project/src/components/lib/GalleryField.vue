<template>
  <ul>
    <li v-for="item in items" :key="item.id" @click="$emit('input', item.id)">
      {{ item.title }} {{ item.id === value ? "(selected)" : "" }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "GalleryField",
  props: {
    value: Number,
    items: Array,
  },
};
</script>

<style>
</style>