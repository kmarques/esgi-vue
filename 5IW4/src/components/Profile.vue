<template>
  <div v-if="user">
    {{ user.firstname }} {{ user.lastname }}
    <button @click="logout">Logout</button>
  </div>
  <div v-else>
    Not connected
    <UserForm @submit="login" />
  </div>
</template>

<script setup>
import { inject } from "vue";
import { user as userKey } from "../lib/keys";
import UserForm from "./UserForm.vue";

const user = inject(userKey);
const logout = inject("user:logout");
const login = inject("user:login");
</script>
