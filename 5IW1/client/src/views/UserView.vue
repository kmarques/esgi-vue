<template>
  <AuthProvider v-slot="{ login, user }">
    <UserForm @submit="login" v-if="user === null" />
    <Profile />
  </AuthProvider>
</template>

<script setup>
import Profile from "../components/Profile.vue";
import AuthProvider from "../components/providers/AuthProvider.vue";
import UserForm from "../components/UserForm.vue";
</script>
