<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});
//defineProps(["title", "title2"]);
console.log(props.msg, props.msg2);
const content = "<h1>Salut</h1>";
</script>

<!--
  Vue 3 Composition API
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    console.log(props.msg, props.msg2);
    const content = "<h1>Salut</h1>";
    return {
      content
    }
  },
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
      required: true,
    }
  },
  computed: {
    content() {
      return "<h1>Salut</h1>";
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
      <p v-track="'COUCOU-TAG'" v-html="content"></p>
      <!-- Alternatives
      <p v-track.click="'COUCOU-TAG'" v-html="content"></p>
      <p v-track:COUCOU.click.mouseover v-html="content"></p>
      -->
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
