<template>
  <div v-if="actions.add">
    <slot name="addForm"> Add </slot>
  </div>
  <ul>
    <template v-for="(item, index) in data" :key="item.id">
      <li v-if="conditionalRender(item, index)">
        <slot name="item" :item="item" :index="index">
          <span>{{ index }} - {{ item }}</span>
          <button @click="actions.edit(item)">Edit</button>
          <button @click="actions.delete(item)">Delete</button>
        </slot>
      </li>
    </template>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const { items } = defineProps({
  items: {
    type: Object,
    required: true,
  },
  conditionalRender: {
    type: Function,
    default: () => true,
  },
  actions: {
    type: Object,
    default: {
      add: true,
      edit: true,
      delete: true,
    },
  },
});

const data = ref(items);
</script>
