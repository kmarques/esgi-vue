<template>
  <div>
    <Button variant="squared" title="Click Me" :onClick="handleClick" />
    <Button title="YACM" :onClick="handleClick" />
    <Button variant="text" title="YACM" :onClick="handleClick" />
    <Button
      variant="rounded"
      title="Alert"
      :onClick="() => (alert1 = !alert1)"
    />
    <ToggleButton />
  </div>
</template>

<script>
import ToggleButton from "../../components/lib/ToggleButton.vue";
import Button from "../../components/lib/Button.vue";
export default {
  components: {
    ToggleButton,
    Button,
  },
  name: "ButtonView",
  methods: {
    handleClick: () => console.log("Click Me"),
  },
  data: () => ({
    alert1: false,
  }),
  watch: {
    alert1: function (val) {
      if (val) alert("Alert");
    },
  },
};
</script>

<style>
</style>