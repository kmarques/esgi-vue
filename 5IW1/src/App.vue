<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import MyButton from "./components/MyButton.vue";
import { ref, reactive } from "vue";

const content = "<h1>Content</h1>";

const isMagenta = ref(false);

const theme = reactive({
  color: "white",
  backgroundColor: "cyan",
});

function toggleMagenta() {
  isMagenta.value = !isMagenta.value;
}

function toggleColor() {
  if (theme.color === "white") {
    theme.color = "black";
    theme.backgroundColor = "yellow";
  } else {
    theme.color = "white";
    theme.backgroundColor = "cyan";
  }
}

const buttonsArray = [
  {
    title: "Button 1",
    rounded: true,
    color: "blue",
  },
  {
    title: "Hello 2 - toggle color",
    rounded: false,
    color: "red",
    onClick: toggleColor,
  },
  {
    title: "Hello 3 - toggle magenta",
    rounded: true,
    color: "green",
    onClick: toggleMagenta,
  },
];

const buttonsObject = {
  button1: {
    title: "Button 1",
    rounded: true,
    color: "blue",
  },
  button2: {
    title: "Hello 2 - toggle color",
    rounded: false,
    color: "red",
    onClick: toggleColor,
  },
  button3: {
    title: "Hello 3 - toggle magenta",
    rounded: true,
    color: "green",
    onClick: toggleMagenta,
  },
};
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
  <header
    :style="{
      backgroundColor: isMagenta ? 'magenta' : 'green',
    }"
  >
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <template
        v-for="(button, index) in buttonsArray"
        :key="button.title + index"
      >
        <MyButton v-bind="button" v-if="!button.rounded" />
      </template>
      <MyButton
        v-for="(button, prop, index) in buttonsObject"
        :key="button.title + prop + index"
        v-bind="button"
      />
      <div v-if="isMagenta">
        It's magenta
        <div v-if="theme.backgroundColor === 'cyan'">and cyan</div>
      </div>
      <div v-else-if="theme.backgroundColor === 'cyan'">It's cyan</div>
      <div v-else>It's not magenta</div>
      <div v-show="isMagenta">It's magenta</div>
      <HelloWorld msg="You did it!" msg2="Test" />
      <p v-html="content"></p>
    </div>
  </header>

  <main :style="theme">
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
