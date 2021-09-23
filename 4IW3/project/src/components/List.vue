<template>
  <ul>
    <li v-for="item in dataEven" :key="item.id">
      <span>{{ item.name | uppercase }}</span>
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
      return this.data.filter((item) => item.id % 2 == 0);
    },
  },
  filters: {
    uppercase: (val) => val.toUpperCase(),
  },
};
</script>