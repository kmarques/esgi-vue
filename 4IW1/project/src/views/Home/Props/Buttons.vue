<template>
  <div>
    <Button variant="squared" title="Click Me" v-bind:onClick="handleClick" />
    <Button
      variant="rounded"
      :title="checked ? 'Checked' : 'Unchecked'"
      :onClick="() => (checked = !checked)"
    />
    <Button title="YACM" variant="text" :onClick="handleClick" />
  </div>
</template>

<script>
import Button from "../../../components/Button";

export default {
  components: {
    Button,
  },
  data: () => ({
    checked: false,
  }),
  methods: {
    handleClick: () => console.log("click me"),
  },
};
</script>

<style>
</style>