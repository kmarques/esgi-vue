<template>
  <slot :login="login"></slot>
</template>

<script setup>
import { ref, provide } from "vue";
import { userKey } from "../lib/di_keys";

const user = ref(null);
function login(userData) {
  user.value = userData;
}
function logout() {
  user.value = null;
}
provide(userKey, user);
provide("user:login", login);
provide("user:logout", logout);
</script>
