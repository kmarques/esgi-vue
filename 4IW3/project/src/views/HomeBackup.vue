<template>
  <div id="app">
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
    <h1>Tp Todo List</h1>
    <tp-todo-list />
    <h1>Tp Todo List Sloted</h1>
    <tp-todo-list>
      <template v-slot:item="{ item }">
        <li>{{ item.title }}</li>
      </template>
    </tp-todo-list>
    <h1>GalleryField (custom event/custom input)</h1>
    <gallery-field
      :items="[
        { id: 1, name: 'plate' },
        { id: 2, name: 'forks' },
      ]"
      v-model="galleryValue"
    />
    {{ galleryValue.name }}
    <h1>Modal (slots)</h1>
    <button @click="openModal = true">Open modal</button>
    <modal :open="openModal" @close="openModal = false">
      <template v-slot:title="slotProps">
        <h1>Modal Example ({{ slotProps.isOpened ? "modal opened" : "" }})</h1>
      </template>
      <template slot="default">
        <h1>Modal content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          dignissim, ipsum eu dignissim consectetur, nisi nunc pellentesque
          urna, eget malesuada nunc nisi eu nisl.
        </p>
      </template>
    </modal>
    <h1>Depedency Injection</h1>
    <todo-list-container>
      <tp-todo-list-injection />
    </todo-list-container>
  </div>
</template>

<script>
//import ToggleButton from "./components/ToggleButton.vue";
import Button from "../components/lib/Button.vue";
//import Collapsable from "./components/Collapsable.vue";
import List from "../components/List.vue";
//import Form from "./components/Form.vue";
//import TpDirective from "./components/TpDirective.vue";
import Lifecycle from "../components/Lifecycle.vue";
import TpTodoList from "../components/tp/TodoList/TpTodoList.vue";
import GalleryField from "../components/lib/GalleryField.vue";
import Modal from "../components/lib/Modal.vue";
import TodoListContainer from "../components/tp/TodoList/TodoListContainer.vue";
import TpTodoListInjection from "../components/tp/TodoList/TpTodoListInjection.vue";

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
    GalleryField,
    Modal,
    TodoListContainer,
    TpTodoListInjection,
  },
  data: () => ({
    alert1: false,
    galleryValue: {},
    openModal: false,
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
</script>
