<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import MyButton from "./components/MyButton.vue";
import { ref, reactive } from "vue";

const isGreen = ref(false);
const state = reactive({
  isGreen: false,
});

function toggleTheme() {
  isGreen.value = !isGreen.value;
  state.isGreen = !state.isGreen;
}
</script>

<!--
  Vue 3 Composition API
<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { ref, reactive } from "vue";


export default {
  name: "App",
  components: {
    HelloWorld,
    TheWelcome
  },
  setup() {
    const isGreen = ref(false);
    const state = reactive({
      isGreen: false,
    });
    return {
      isGreen, state
    }
  }
};
</script>
-->

<!--
  Vue 2 ou Vue 3 Options API
<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TheWelcome
  },
  data() {
    return {
      isGreen: false,
    };
  },
};
</script>
-->

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div :class="['wrapper', { 'bg-green': isGreen }]">
      <p>Theme isGreen: {{ isGreen }} {{ state.isGreen }}</p>
      <MyButton title="Toggle Theme" rounded :onClick="toggleTheme" />
      <MyButton title="Hello" rounded />
      <my-button title="Hello 2" color="red" />
      <my-button title="Hello 3" color="yellow" />
      <HelloWorld msg="You did it2!" msg2="Coucou" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.bg-green {
  background-color: green;
}
</style>
