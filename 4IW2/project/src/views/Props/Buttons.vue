<template>
  <div>
    <ToggleButton />
    <Button title="Click Me" v-bind:onClick="handleClick" />
    <Button title="Alert" variant="rounded" :onClick="handleAlert" />
    <Button title="Foo" variant="text" :onClick="handleClick" />
  </div>
</template>

<script>
import ToggleButton from "../../components/lib/ToggleButton.vue";
import Button from "../../components/lib/Button.vue";

export default {
  name: "Buttons",
  components: {
    ToggleButton,
    Button,
  },
  methods: {
    handleClick: function () {
      console.log("click me");
    },
    handleAlert: function () {
      alert("Alertttt");
    },
  },
};
</script>