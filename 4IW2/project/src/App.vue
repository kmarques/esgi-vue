<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Aretha />
    <ToggleButton />
    <Button title="Click Me" v-bind:onClick="handleClick" />
    <Button title="Alert" variant="rounded" :onClick="handleAlert" />
    <Button title="Foo" variant="text" :onClick="handleClick" />
    <Collapsable
      title="Foo 1"
      description="Kung foo fighting 1"
      defaultBehavior="opened"
    />
    <Collapsable
      title="Foo 2"
      description="Kung foo fighting 2"
      defaultBehavior="closed"
    />
    <Collapsable title="Foo 3" description="Kung foo fighting 3" />
    <List
      :data="[
        { id: 1, name: 'Foo' },
        { id: 2, name: 'Bar' },
      ]"
    />
    <Form />
    <TPDirective />
  </div>
</template>

<script>
import Aretha from "./components/Aretha.vue";
import ToggleButton from "./components/ToggleButton.vue";
import Button from "./components/Button.vue";
import Collapsable from "./components/Collapsable.vue";
import List from "./components/List.vue";
import Form from "./components/Form.vue";
import TPDirective from "./components/TPDirective.vue";

export default {
  name: "App",
  components: {
    Aretha,
    ToggleButton,
    Button,
    Collapsable,
    List,
    Form,
    TPDirective,
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
