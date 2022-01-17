<template>
  <div>
    <h2>Props</h2>
    <router-view name="header" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Props",
};
</script>