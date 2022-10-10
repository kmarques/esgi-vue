<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Button from "./components/Button.vue";
import { ref } from "vue";

const isRed = ref(false);
console.log("isRed", isRed, isRed.value);

function toggleTheme() {
  isRed.value = !isRed.value;
}
</script>

<!--
  Vue Composition API (en mode Options)
<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheWelcome
  },
  async setup() {
    return {
    }
  }
}
</script>
-->

<!--
  Vue Options API
<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheWelcome
  }
}
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

    <div :class="['wrapper', { 'bg-red': isRed }]">
      <p>Theme is red: {{ isRed }}</p>
      <Button title="Toggle Red theme" color="red" :onClick="toggleTheme" />
      <Button title="<table><tr>Hello 2</tr></table>" />
      <Button title="Hello 2" v-bind:rounded="true" />
      <HelloWorld msg="You did At!" id="4" msg2="test" />
      <HelloWorld msg="You did It!" />
      <HelloWorld msg="You did Up!" />
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

.bg-red {
  background-color: red;
}
</style>
