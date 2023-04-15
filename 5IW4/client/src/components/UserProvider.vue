<template>
  <slot :login="login"></slot>
</template>

<script setup>
import { ref, provide } from "vue";
import { user as userKey } from "../lib/keys";
const user = ref(null);

function login() {
  user.value = {
    firstname: "John",
    lastname: "Doe",
  };
}
function logout() {
  user.value = null;
}

provide(userKey, user);
provide("user:login", login);
provide("user:logout", logout);
</script>
