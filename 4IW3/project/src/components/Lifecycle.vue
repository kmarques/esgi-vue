<template>
  <div>
    Lifecycle
    <button @click="counter += 1">+1</button>
    {{ counter }}
  </div>
</template>

<script>
export default {
  name: "Lifecycle",
  data: () => ({
    counter: 0,
  }),
  beforeCreate: () => console.log("beforeCreate"),
  created: () => console.log("created"),
  beforeMount: () => console.log("start animation"),
  mounted: () => console.log("fetch data"),
  beforeUpdate: () => console.log("beforeUpdate"),
  updated: () => console.log("data updated"),
  beforeDestroy: () => console.log("unsubscribe chat"),
  destroyed: () => console.log("destroyed"),
};
</script>

<style>
</style>