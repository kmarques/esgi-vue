<template>
  <div id="app">
    <h1>Directives (+ Tp Aretha)</h1>
    <Aretha />
    <ToggleButton />
    <Button title="Click Me" v-bind:onClick="handleClick" />
    <Button title="Alert" variant="rounded" :onClick="handleAlert" />
    <Button title="Foo" variant="text" :onClick="handleClick" />
    <h1>Event management</h1>
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
    <h1>Forms (events + v-model)</h1>
    <button @click="showTp = !showTp">Toggle Tp</button>
    <TPDirective v-if="showTp" />
    <Form />
    <h1>Tp TodoList</h1>
    <TPTodoList />
    <h1>Tp todolist backend</h1>
    <TPTodoListBackend />
    <h1>GalleryField</h1>
    <gallery-field
      :items="[
        { id: 1, name: 'Foo' },
        { id: 2, name: 'Bar' },
        { id: 3, name: 'Baz' },
      ]"
      v-model="selectedValue"
    />
    {{ selectedValue.name }}
    <h1>Modal (slots)</h1>
    <button @click="openModal = true">Open Modal</button>
    <modal :open="openModal" @close="openModal = false">
      <template #title="{ isOpened }">
        <h1>Modal Example {{ isOpened ? "(opened)" : "" }}</h1>
      </template>
      <template name="default">
        <p>This is the default content of the modal.</p>
      </template>
    </modal>
    <h1>Dependency injection</h1>
    <todo-list-container>
      <TodoListDI />
    </todo-list-container>
  </div>
</template>

<script>
import Aretha from "./components/Aretha.vue";
import ToggleButton from "./components/lib/ToggleButton.vue";
import Button from "./components/lib/Button.vue";
import Collapsable from "./components/lib/Collapsable.vue";
import List from "./components/List.vue";
import Form from "./components/Form.vue";
import TPDirective from "./components/TPDirective.vue";
import TPTodoList from "./components/TodoList/TPTodoList.vue";
import TPTodoListBackend from "./components/TodoList/TPTodoListBackend.vue";
import GalleryField from "./components/lib/GalleryField.vue";
import Modal from "./components/lib/Modal.vue";
import TodoListContainer from "./components/TodoList/DependencyInjection/TpTodoListContainer.vue";
import TodoListDI from "./components/TodoList/DependencyInjection/TpTodoList.vue";

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
    TPTodoList,
    TPTodoListBackend,
    GalleryField,
    Modal,
    TodoListContainer,
    TodoListDI,
  },
  data: () => ({
    showTp: true,
    selectedValue: {},
    openModal: false,
  }),
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
