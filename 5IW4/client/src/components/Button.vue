<script setup>
import { computed } from "vue";

const props = defineProps({
  onClick: {
    type: Function,
    required: true,
  },
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
    validator: (value) => {
      return ["blue", "red", "green"].includes(value);
    },
  },
});

function handleClick(type, event) {
  console.log(event);
  console.log("click");
  props.onClick();
}

const buttonStyle = computed(() => ({
  backgroundColor: props.color,
  borderRadius: props.rounded ? "50%" : "0",
  color: "magenta",
}));

console.log(props);
</script>

<!--
  Vue 3 Composition API Verbose
<script>
import { computed } from "vue";

export default {
  name: "Button",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
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
      validator: (value) => {
        return ["blue", "red", "green"].includes(value);
      },
    },
  },
  setup(props) {
    function handleClick(type, event) {
      console.log(event);
      console.log("click");
      props.onClick();
    }

    const buttonStyle = computed(() => {
      return {
        backgroundColor: props.color,
        borderRadius: props.rounded ? "50%" : "0",
      };
    });

    console.log(props);

    return {
      handleClick,
      buttonStyle,
    };
  },
};
}
</script>
-->

<!--
    Options API
<script>
export default {
    name: 'Button',
    props: {
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
            default: 'blue',
            validator: (value) => {
                return ['blue', 'red', 'green'].includes(value);
            },
        },
    },
    methods: {
        handleClick() {
            console.log('click');
        },
    },
    computed: {
        buttonStyle() {
            return {
                backgroundColor: this.color,
                borderRadius: this.rounded ? '50%' : '0',
            };
        },
    },
}
</script>
-->

<template>
  <button :style="buttonStyle" @click="handleClick('test', $event)">
    {{ title }}
  </button>
</template>

<!--
<template>
    <button
      v-bind:style="{
        color,
        borderRadius: rounded ? '50%' : '0',
      }"
      v-on:click="handleClick('test', $event)"
    >
      {{ title }}
    </button>
  </template>
  -->
