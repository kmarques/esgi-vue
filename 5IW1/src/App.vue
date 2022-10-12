<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import MyButton from "./components/MyButton.vue";
const content = "<h1>Content</h1>";
</script>

<!--
  Vue 3 Composition API
  <script>
  import HelloWorld from "./components/HelloWorld.vue";
  import TheWelcome from "./components/TheWelcome.vue";
  import MyButton from "./components/MyButton.vue";


  export default {
    name: "App",
    components: {
      HelloWorld,
      TheWelcome,
      MyButton
    },
    setup() {
      const content = "<h1>Content</h1>";
      return {
        content
      };
    }
  }
  </script>
-->

<!--
  Vue 2 ou Vue 3 Options API
  <script>
  import HelloWorld from "./components/HelloWorld.vue";
  import TheWelcome from "./components/TheWelcome.vue";
  import MyButton from "./components/MyButton.vue";

  export default {
    name: "App",
    components: {
      HelloWorld,
      TheWelcome,
      MyButton
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

    <div class="wrapper">
      <MyButton title="Hello" />
      <my-button title="Hello 2" rounded color="cyan" />
      <my-button title="Hello 3" :rounded="true" />
      <HelloWorld msg="Yodu did it!" msg2="Test" />
      <p v-html="content"></p>
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
</style>
