<template>
  <button v-bind:class="className" v-on:click="checked = !checked">
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
  computed: {
    className: function () {
      return this.checked ? "checked" : "unchecked";
    },
  },
  watch: {
    checked: function (val) {
      this.title = val ? "Checked" : "Unchecked";
    },
  },
};
</script>

<style scoped>
.checked {
  color: green;
}

.unchecked {
  color: red;
}
</style>