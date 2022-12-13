<template>
  <UserProvider v-slot:default="{ login }">
    <Modal v-model="isOpen">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">Open modal</button>
      </template>
      <template v-slot:default="{ message }">
        <UserForm @submit="login" />
        {{ message }}
      </template>
      <template v-slot:footer>
        <button @click="isOpen = false">Close Modal</button>
        {{ message }}
      </template>
      <template v-slot:header>
        <h1>My header</h1>
      </template>
    </Modal>
    <Profile />
  </UserProvider>
</template>

<script setup>
import Modal from "../components/Modal.vue";
import UserForm from "../components/UserForm.vue";
import UserProvider from "../components/UserProvider.vue";
import Profile from "../components/Profile.vue";
import { ref } from "vue";

const isOpen = ref(false);
</script>
