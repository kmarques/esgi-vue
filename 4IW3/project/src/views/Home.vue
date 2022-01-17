<template>
  <div id="app">
    <h1>Home</h1>
    <div class="container">
      <div class="links">
        <h3>Props</h3>
        <router-link to="/props/buttons">Buttons</router-link>
        <router-link to="/props/collapse">Collapse</router-link>
        <router-link to="/tp-todo-list">Tp Todo List</router-link>
        <router-link to="/custom-event">Custom Event</router-link>
        <h3>Slots</h3>
        <router-link to="/slots/modal">Modal</router-link>
        <router-link to="/slots/todo-list">Todo List</router-link>
        <router-link to="/di">Depedency Injection</router-link>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
//import ToggleButton from "./components/ToggleButton.vue";
//import Button from "../components/lib/Button.vue";
////import Collapsable from "./components/Collapsable.vue";
//import List from "../components/List.vue";
////import Form from "./components/Form.vue";
////import TpDirective from "./components/TpDirective.vue";
//import Lifecycle from "../components/Lifecycle.vue";
//import TpTodoList from "../components/tp/TodoList/TpTodoList.vue";
//import GalleryField from "../components/lib/GalleryField.vue";
//import Modal from "../components/lib/Modal.vue";
//import TodoListContainer from "../components/tp/TodoList/TodoListContainer.vue";
//import TpTodoListInjection from "../components/tp/TodoList/TpTodoListInjection.vue";

export default {
  name: "App",
  components: {
    ////ToggleButton,
    ////Collapsable,
    //List,
    ////Form,
    ////TpDirective,
    //Button,
    //Lifecycle,
    //TpTodoList,
    //GalleryField,
    //Modal,
    //TodoListContainer,
    //TpTodoListInjection,
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

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
.links {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
