<template>
  <template v-if="open">
    <div class="overlay" @click="$emit('close')"></div>
    <div class="modal">
      <div class="title">
        <slot name="title"> Modal title </slot>
      </div>
      <div class="content">
        <slot :message="message"></slot>
      </div>
      <div class="footer">
        <slot name="footer"> Modal footer </slot>
      </div>
    </div>
  </template>
</template>
<script setup>
defineProps({
  open: {
    type: Boolean,
    required: true,
  },
});

const message = "Hello World";
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  background-color: white;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: black;
}

.content {
  flex: 1;
  overflow: auto;
}
</style>
