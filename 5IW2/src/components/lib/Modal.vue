<script setup>
import { ref } from "vue";

const open = ref(false);

function handleClose() {
  open.value = false;
}

function toggleModal() {
  open.value = !open.value;
}
</script>

<template>
  <slot name="activator" :open="open" :toggleModal="toggleModal">
    <button @click="toggleModal">Open Modal</button>
  </slot>
  <template v-if="open">
    <div class="overlay" @click="toggleModal"></div>
    <div class="modal">
      <div class="modal-title">
        <slot name="title" :open="open">Modal Title</slot>
      </div>
      <div class="modal-content">
        <slot>Modal Content</slot>
      </div>
      <div class="modal-footer">
        <slot name="footer" :handleClose="handleClose">
          <button @click="handleClose">Close</button>
        </slot>
      </div>
    </div>
  </template>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.modal-content {
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.modal-footer {
  margin-top: 1rem;
  text-align: right;
}
</style>
