<template>
  <slot name="activator" :openModal="openModal">
    <button @click="open = true">Open Modal</button>
  </slot>

  <template v-if="open">
    <div class="overlay" @click="open = false"></div>
    <div class="modal">
      <div class="modal-title">
        <slot name="title" :opened="open">Modal title</slot>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer" :closeModal="closeModal">
          <button @click="open = false">Close</button>
        </slot>
      </div>
    </div>
  </template>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);

function closeModal() {
  open.value = false;
}
function openModal() {
  open.value = true;
}
</script>

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
  color: black;
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
