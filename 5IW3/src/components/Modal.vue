<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const message = "Hello world";
</script>

<template>
  <dialog :open="open">
    <slot name="header">Modal header</slot>
    <hr />
    <slot name="default" :message="message"></slot>
    <hr />
    <div class="row">
      <slot name="actions">
        <button @click="$emit('close')">Close</button>
      </slot>
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  position: absolute;
  z-index: 9999;
}
.row {
  display: flex;
  justify-content: flex-end;
}
</style>
