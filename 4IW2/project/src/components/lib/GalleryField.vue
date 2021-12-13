<template>
  <ul>
    <li v-for="item in items" :key="item.id" @click="$emit('input', item)">
      {{ item.name }} {{ item.id === value.id ? "(selected)" : "" }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "GalleryField",
  props: {
    items: {
      type: Array,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>