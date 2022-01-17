<template>
  <div>
    <List
      :data="[
        { id: 1, name: 'test' },
        { id: 2, name: 'foo' },
      ]"
    />
  </div>
</template>

<script>
import List from "../../../components/List";

export default {
  components: {
    List,
  },
};
</script>

<style>
</style>