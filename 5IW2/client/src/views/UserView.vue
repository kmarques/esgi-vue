<script setup>
import Modal from "../components/lib/Modal.vue";
import Profile from "../components/Profile.vue";
import UserProvider from "../components/providers/UserProvider.vue";
import UserForm from "../components/UserForm.vue";

function handleUserRegister(userData) {
  console.log(userData);
}
</script>

<template>
  <UserProvider v-slot="{ login, user }">
    <UserForm v-if="!user" @submit="login" />
    <Profile />
  </UserProvider>
</template>
