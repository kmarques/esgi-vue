<template>
  <div>
    <Collapsable
      title="Foo 1"
      description="Kung foo fighting 1"
      defaultBehavior="opened"
    />
    <Collapsable
      title="Foo 2"
      description="Kung foo fighting 2"
      defaultBehavior="closed"
    />
    <Collapsable title="Foo 3" description="Kung foo fighting 3" />
  </div>
</template>

<script>
import Collapsable from "../../components/lib/Collapsable.vue";

export default {
  name: "Collapse",
  components: {
    Collapsable,
  },
};
</script>