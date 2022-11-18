<template>
  <div v-if="user">
    {{ user.lastname }} {{ user.firstname }}
    <button @click="logout">Logout</button>
  </div>
  <template v-else>
    <h2>Not connected</h2>
    <UserForm @submit="login" />
  </template>
</template>

<script setup>
import { inject } from "vue";
import { userKey } from "../lib/di_keys";
import UserForm from "./UserForm.vue";

const user = inject(userKey);
const login = inject("user:login");
const logout = inject("user:logout");
</script>
