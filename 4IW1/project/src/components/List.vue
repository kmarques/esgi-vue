<template>
  <ul>
    <li v-for="item in data" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    data: Array,
  },
  computed: {
    dataEven: function () {
      return this.data.filter((item) => item.id % 2 === 0);
    },
  },
};
</script>

<style>
</style>