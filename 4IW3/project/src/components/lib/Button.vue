<template>
  <button
    v-if="variant !== 'text'"
    :class="variant"
    @click.alt="handleCtrlClick"
    v-on:click.exact="onClick"
  >
    {{ title }}
  </button>
  <a v-else @click.alt="handleCtrlClick" @click.exact="onClick">{{ title }}</a>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
    onClick: Function,
    variant: {
      type: String,
      default: "squared",
      validator: function (val) {
        return ["squared", "rounded", "text"].includes(val);
      },
    },
  },
  methods: {
    handleCtrlClick: function () {
      console.log("Ctrl clicked");
    },
  },
};
</script>

<style scoped>
.rounded {
  border-radius: 50%;
}
</style>