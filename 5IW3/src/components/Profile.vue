<template>
  <h1 v-if="user">{{ user.name }}</h1>
  <div v-else>
    Not connected
    <UserForm @submit="login" />
  </div>
</template>

<script setup>
import UserForm from "./UserForm.vue";
import { inject } from "vue";
const user = inject("user:user");
const login = inject("user:login");
</script>
