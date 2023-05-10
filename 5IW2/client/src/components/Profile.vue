<template>
  <div>
    <div v-if="user">
      <h1>Welcome {{ user.firstname }}</h1>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <h1>Welcome Guest</h1>
      <Modal>
        <template #activator="{ open, toggleModal }">
          <button
            :style="{ backgroundColor: open ? 'green' : 'red' }"
            @click="toggleModal"
          >
            Open Modal
          </button>
        </template>
        <template v-slot:title="{ open }">
          <h1>User Form (State: {{ open.toString() }})</h1>
        </template>
        <template #default>
          <UserForm @submit="login" />
        </template>
        <template #footer="{ handleClose }">
          <button @click="handleClose">Submit</button>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import Modal from "./lib/Modal.vue";
import { user as UserKey } from "./providers/UserProviderKeys";
import UserForm from "./UserForm.vue";

const user = inject(UserKey);
const login = inject("userProvider:login");
const logout = inject("userProvider:logout");
</script>
