<template>
  <UserProvider v-slot="{ login, logout }">
    <Modal :open="openModal" @close="openModal = false">
      <template #header>
        <h1>User form</h1>
      </template>
      <template v-slot:default="{ message }">
        <h2>{{ message }}</h2>
        <UserForm @submit="login()" />
      </template>
    </Modal>
    <button @click="openModal = !openModal">open Modal</button>
    <button @click="logout">Logout</button>
    <Profile />
  </UserProvider>
</template>

<script setup>
import Modal from "../components/Modal.vue";
import Profile from "../components/Profile.vue";
import UserForm from "../components/UserForm.vue";
import UserProvider from "../components/UserProvider.vue";
import { ref } from "vue";

const openModal = ref(false);
</script>
