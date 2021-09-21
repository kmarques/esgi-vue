<template>
  <ul>
    <li v-for="item in dataEven" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
    dataEven: function () {
      return this.data.filter((val, index) => index % 2 === 0);
    },
  },
};
</script>