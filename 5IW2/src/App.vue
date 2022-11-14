<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import MyButton from "./components/MyButton.vue";
import MyHeader from "./components/Header.vue";
import { ref, reactive } from "vue";

const isGreen = ref(false);
const isYellow = ref(false);
const state = reactive({
  isGreen: false,
});

function toggleTheme() {
  isGreen.value = !isGreen.value;
  state.isGreen = !state.isGreen;
}
function toggleThemeYellow() {
  isYellow.value = !isYellow.value;
}

const buttonsArray = [
  {
    title: "Button 1",
    bgColor: "blue",
    onClick: () => {
      console.log("Button 1 clicked");
    },
  },
  {
    title: "Button 2",
    rounded: true,
    onClick: () => {
      console.log("Button 2 clicked");
    },
  },
  {
    title: "Button 3",
    color: "red",
    onClick: () => {
      console.log("Button 3 clicked");
    },
  },
];
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
  <MyHeader v-if="!isYellow" title="My header" :isGreen="isGreen" />
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
      <MyButton
        title="Toggle Theme Yellow"
        rounded
        :onClick="toggleThemeYellow"
      />

      <template
        v-for="(button, index) in buttonsArray"
        :key="button.title + index"
      >
        <MyButton v-if="!button.rounded" v-bind="button" />
      </template>

      <HelloWorld msg="You did it2!" msg2="Coucou" />
      <div v-if="isGreen">
        It's green time (if)
        <div v-if="isYellow">And Yellow time</div>
      </div>
      <div v-else-if="isYellow">It's yellow time</div>
      <div v-else>Time to rest</div>
      <div v-show="isGreen">It's green time (show)</div>
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
