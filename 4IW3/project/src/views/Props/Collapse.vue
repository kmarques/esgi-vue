<template>
  <div>
    <Collapsable title="Test 1" description="Desc 1" />
    <Collapsable
      defaultBehaviour="closed"
      title="Test 2"
      description="Desc 2"
    />
    <Collapsable
      defaultBehaviour="opened"
      title="Test 3"
      description="Desc 3"
    />
  </div>
</template>

<script>
import Collapsable from "../../components/lib/Collapsable.vue";

export default {
  components: { Collapsable },
  name: "CollapseView",
};
</script>

<style>
</style>