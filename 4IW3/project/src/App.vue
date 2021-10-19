<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Button variant="squared" title="Click Me" :onClick="handleClick" />
    <Button title="YACM" :onClick="handleClick" />
    <Button variant="text" title="YACM" :onClick="handleClick" />
    <Button
      variant="rounded"
      title="Alert"
      :onClick="() => (alert1 = !alert1)"
    />
    <!--<Collapsable title="Test 1" description="Desc 1" />
    <ToggleButton />
    <Collapsable
      defaultBehaviour="closed"
      title="Test 2"
      description="Desc 2"
    />
    <Collapsable
      defaultBehaviour="opened"
      title="Test 3"
      description="Desc 3"
    />-->
    <List
      :data="[
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' },
      ]"
    />
    <!--<Form />
    <TpDirective />-->
    {{ "2021-09-21" | dateFormat("d-y-m") }}
    <Lifecycle v-if="alert1" />
    <tp-todo-list />
  </div>
</template>

<script>
//import ToggleButton from "./components/ToggleButton.vue";
import Button from "./components/Button.vue";
//import Collapsable from "./components/Collapsable.vue";
import List from "./components/List.vue";
//import Form from "./components/Form.vue";
//import TpDirective from "./components/TpDirective.vue";
import Lifecycle from "./components/Lifecycle.vue";
import TpTodoList from "./components/TpTodoList.vue";

export default {
  name: "App",
  components: {
    //ToggleButton,
    //Collapsable,
    List,
    //Form,
    //TpDirective,
    Button,
    Lifecycle,
    TpTodoList,
  },
  data: () => ({
    alert1: false,
  }),
  methods: {
    handleClick: () => console.log("Click Me"),
  },
  watch: {
    alert1: function (/*val*/) {
      //if (val) alert("Alert");
    },
  },
  filters: {
    jsonify: (val) => JSON.stringify(val),
    dateFormat: (val, format) => {
      const keyParts = format.split("-");
      let date = new Date(val);
      return keyParts
        .map((key) => {
          switch (key) {
            case "y":
              return date.getFullYear();
            case "m":
              return date.getMonth() + 1;
            case "d":
              return date.getDate();
            case "h":
              return date.getHours();
            case "i":
              return date.getMinutes();
          }
        })
        .join("-");
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
