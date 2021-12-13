<template>
  <div v-show="open">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal">
      <div class="modal-header">
        <slot name="title" :isOpened="open">
          <h3>Modal Title</h3>
        </slot>
        <button class="modal-close" @click="$emit('close')">&times;</button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          <button class="button" @click="$emit('close')">Cancel</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleClose);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleClose);
  },
  computed: {
    handleClose() {
      return (event) => {
        if (event.key === "Escape") {
          this.$emit("close");
        }
      };
    },
  },
};
</script>

<style scoped>
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.modal-header {
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
}
.modal-close {
  font-size: 30px;
  cursor: pointer;
}
</style>