<template>
  <slot name="activator" :on="on" :attrs="$attrs"></slot>
  <template v-if="modelValue">
    <div class="overlay" @click="$emit('close')" />
    <div class="modal">
      <div class="title">
        <slot name="title">Title</slot>
      </div>
      <div class="content">
        <slot name="default" :message="message">Content</slot>
      </div>
      <div class="footer">
        <slot name="footer">
          Footer
          <button @click="$emit('close')">Close</button>
        </slot>
      </div>
    </div>
  </template>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
const on = {
  click: () => {
    emit("update:modelValue", true);
  },
};

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
  padding: 5px 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 500px;
  min-height: 500px;
  background-color: white;
  z-index: 1001;
  color: black;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
