<template>
  <UserProvider v-slot="{ login }">
    <button @click="isOpen = !isOpen">Toggle Modal</button>
    <Modal :open="isOpen" @close="isOpen = false">
      <template #default="{ message }">
        <div>
          <p>{{ message }}</p>
        </div>
        <UserForm @submit="login" />
      </template>
      <template #item="{ item }">
        <div>
          <p>{{ item.name }}</p>
        </div>
      </template>
      <template #form="{ submit }">
        <form @submit.prevent="submit">
          <input type="text" v-model="item.name" />
          <button type="submit">Submit</button>
        </form>
      </template>
      <template v-slot:title>
        <h1>Edit User</h1>
      </template>
    </Modal>
    <Profile />
  </UserProvider>
</template>

<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
import Profile from "../components/Profile.vue";
import UserForm from "../components/UserForm.vue";
import UserProvider from "../components/UserProvider.vue";

const isOpen = ref(false);
</script>
