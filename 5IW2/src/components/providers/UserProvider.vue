<template>
  <slot :login="login" :user="user"></slot>
</template>

<script setup>
import { ref, provide } from "vue";
import { user as UserKey } from "./UserProviderKeys";
const user = ref();

const login = function (value) {
  user.value = value;
};

const logout = function () {
  user.value = null;
};

provide(UserKey, user);
provide("userProvider:login", login);
provide("userProvider:logout", logout);
</script>
