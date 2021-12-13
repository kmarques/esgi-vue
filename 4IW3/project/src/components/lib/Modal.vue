<template>
  <div v-show="open" class="modal">
    <div @click="$emit('close')" class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <slot name="title" :isOpened="open">
          <p>Modal header</p>
        </slot>
        <button
          class="delete"
          aria-label="close"
          @click="$emit('close')"
        ></button>
      </header>
      <section class="modal-card-body">
        <slot>
          <p>Modal body</p>
        </slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer">
          <button class="button" @click="$emit('close')">Close</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    open: Boolean,
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  background: #fff;
  border-radius: 4px;
  overflow-y: scroll;
}

.modal-card-head {
  padding: 1rem;
  border-bottom: 1px solid #eaecef;
  display: "flex";
  justify-content: space-between;
}
</style>