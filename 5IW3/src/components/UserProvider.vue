<template>
  <slot :login="login" :logout="logout"></slot>
</template>

<script setup>
import { provide, ref } from "vue";

const user = ref(null);
const login = function () {
  user.value = {
    name: "John Doe",
  };
};
const logout = function () {
  user.value = null;
};

provide("user:user", user);
provide("user:login", login);
</script>
