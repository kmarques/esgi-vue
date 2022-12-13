<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "blue",
    validator(value) {
      return ["blue", "red", "green"].includes(value);
    },
  },
  onClick: {
    type: Function,
    required: true,
  },
});
</script>

<!--
    Vue 3 Composition API
    <script>
    export default {
        name: "MyButton",
        props: {
        title: {
            type: String,
            required: true
        },
        rounded: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: "blue",
            validator(value) {
            return ["blue", "red", "green"].includes(value);
            }
        }
        },
        setup(props) {
            function alert() {
                window.alert("test");
            }
            return {
                alert
            };
        }
    };
    </script>
-->

<!--
    Vue 2 ou Vue 3 Options API
    <script>
    export default {
        name: "MyButton",
        props: {
            title: {
                type: String,
                required: true
            },
            rounded: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: "blue",
                validator(value) {
                return ["blue", "red", "green"].includes(value);
                }
            }
        },
        methods: {
            alert() {
                window.alert("test");
            }
        }
    };
    </script>
-->

<template>
  <button
    :style="{
      backgroundColor: color,
      borderRadius: rounded ? '50%' : '0',
    }"
    @click="onClick"
  >
    {{ title }}
  </button>
</template>
