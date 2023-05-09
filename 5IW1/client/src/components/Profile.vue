<template>
  <div v-if="user">
    <h1>Welcome {{ user.firstname }}</h1>
    <button @click="logout">Logout</button>
  </div>
  <div v-else>
    <h1>Welcome Guest</h1>
    <Modal>
      <template #activator="{ openModal }">
        <button @click="openModal">Register</button>
      </template>
      <template v-slot:title="{ opened }"
        >Register (State: {{ opened.toString() }})</template
      >
      <template #footer="{ closeModal }">
        <button @click="closeModal">Cancel</button>
      </template>
      <template #default>
        <UserForm @submit="login" />
      </template>
    </Modal>
  </div>
</template>

<script setup>
import Modal from "./lib/Modal.vue";
import UserForm from "./UserForm.vue";
import { inject } from "vue";
import { logoutKey } from "./providers/AuthProviderKeys";

const user = inject("userProvider|user");
const login = inject("userProvider|login");
const logout = inject(logoutKey);
</script>
