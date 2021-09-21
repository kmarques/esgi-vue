<template>
  <button v-on:click="checked = !checked">
    {{ title }}
    {{ yatitle }}
  </button>
</template>

<script>
export default {
  name: "ToggleButton",
  data: () => ({
    checked: false,
    yatitle: "Unchecked",
  }),
  computed: {
    title: function () {
      return this.checked ? "Checked" : "Unchecked";
    },
  },
  watch: {
    title: function (val) {
      this.yatitle = val;
    },
  },
};
</script>

<style>
</style>