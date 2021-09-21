<template>
  <button v-on:click="checked = !checked">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "ToggleButton",
  data: () => ({
    checked: false,
    title: "Unchecked",
  }),
  watch: {
    checked: function (val) {
      this.title = val ? "Checked" : "Unchecked";
    },
  },
};
</script>