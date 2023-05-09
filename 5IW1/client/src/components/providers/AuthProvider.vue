<template>
  <slot :login="login" :user="user"></slot>
</template>

<script setup>
import { ref, provide } from "vue";
import { logoutKey } from "./AuthProviderKeys";

const user = ref(null);

function login(data) {
  user.value = data;
}

function logout() {
  user.value = null;
}

provide("userProvider|user", user);
provide("userProvider|login", login);
provide(logoutKey, logout);
</script>
