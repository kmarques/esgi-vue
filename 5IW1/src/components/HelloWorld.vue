<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
  objStr: {
    type: Object,
    validator: (value) => {
      return (
        Object.values(value).filter((v) => typeof v === "string").length ===
        Object.values(value).length
      );
    },
  },
});

console.log(props.msg);
//defineProps(["msg"]);
</script>

<!--
  Vue 3 Composition API
  <script>
  export default {
    name: "HelloWorld",
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    setup(props) {
      console.log(props.msg)
    }
  };
  </script>
-->

<!-- 
  Vue 2 ou Vue 3 Options API
  <script>
  export default {
    name: "HelloWorld",
    props: {
      msg: {
        type: String,
        required: true
      }
    }
  };
  </script>
-->

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
