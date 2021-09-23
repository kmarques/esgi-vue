<template>
  <div id="app" @keyup.capture.alt.down="handleDuplicate">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Aretha />
    <Button variant="squared" title="Click Me" v-bind:onClick="handleClick" />
    <Button
      variant="rounded"
      :title="checked ? 'Checked' : 'Unchecked'"
      :onClick="() => (checked = !checked)"
    />
    <Button title="YACM" variant="text" :onClick="handleClick" />
    <Collapsable
      title="Test 1"
      description="Desc 1"
      defaultBehaviour="opened"
    />
    <Collapsable
      title="Test 2"
      description="Desc 2"
      defaultBehaviour="closed"
    />
    <Collapsable title="Test 3" description="Desc 3" />
    <List
      :data="[
        { id: 1, name: 'test' },
        { id: 2, name: 'foo' },
      ]"
    />
    <Form />
    <ToggleButton />
  </div>
</template>

<script>
import List from "./components/List.vue";
import Aretha from "./components/Aretha.vue";
import Button from "./components/Button.vue";
import Collapsable from "./components/Collapsable.vue";
import Form from "./components/Form.vue";
import ToggleButton from "./components/ToggleButton.vue";

export default {
  name: "App",
  components: {
    Aretha,
    Button,
    Collapsable,
    List,
    Form,
    ToggleButton,
  },
  data: () => ({ checked: false }),
  methods: {
    handleClick: () => console.log("click me"),
    handleAlert: () => alert("alert"),
    handleDuplicate: function () {
      this.data.push({ id: new Date(), name: new Date() });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
