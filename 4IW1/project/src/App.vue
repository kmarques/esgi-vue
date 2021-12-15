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
    <button @click="showTp = !showTp">toggle tp</button>
    <TpDirective v-if="showTp" />
    <TPTodoList />
    <h1>Todo List (event custom)</h1>
    <TPTodoListCustom />
    <h3>Gallery</h3>
    <gallery-field
      :items="[
        { id: 1, title: 'test' },
        { id: 2, title: 'test2' },
      ]"
      v-model="gallery"
    />
    {{ gallery }}
    <h1>Slots</h1>
    <CollapsableSlot>
      <template v-slot:title="{ isOpen }">
        <h1>Title Custom ({{ isOpen ? "opened" : "closed" }})</h1>
      </template>
      <template slot="description">
        <table>
          <tbody>
            <tr>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
            </tr>
          </tbody>
        </table>
      </template>
    </CollapsableSlot>
    <h1>Todo List (DI)</h1>
    <TodoListContainer>
      <TodoListDI />
    </TodoListContainer>
  </div>
</template>

<script>
import List from "./components/List.vue";
import Aretha from "./components/Aretha.vue";
import Button from "./components/Button.vue";
import Collapsable from "./components/Collapsable.vue";
import Form from "./components/Form.vue";
import ToggleButton from "./components/ToggleButton.vue";
import TpDirective from "./components/TpDirective.vue";
import TPTodoList from "./components/TPTodoListBackend.vue";
import TPTodoListCustom from "./components/TodoList/TPTodoList.vue";
import GalleryField from "./components/lib/GalleryField.vue";
import CollapsableSlot from "./components/lib/Collapsable.vue";
import TodoListContainer from "./components/TodoList/DependencyInjection/TPTodoListContainer.vue";
import TodoListDI from "./components/TodoList/DependencyInjection/TPTodoList.vue";

export default {
  name: "App",
  components: {
    Aretha,
    Button,
    Collapsable,
    List,
    Form,
    ToggleButton,
    TpDirective,
    TPTodoList,
    TPTodoListCustom,
    GalleryField,
    CollapsableSlot,
    TodoListContainer,
    TodoListDI,
  },
  data: () => ({ checked: false, showTp: false, gallery: null }),
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
