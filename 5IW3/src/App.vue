<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import MyButton from "./components/MyButton.vue";
import { ref, computed } from "vue";

const isYellow = ref(false);
const count = ref(0);
function add() {
  count.value++;
}

function toggleTheme() {
  isYellow.value = !isYellow.value;
}

const themeClass = computed(() => {
  console.log("themeClass computed");
  const classNames = ["wrapper"];
  if (isYellow.value) {
    classNames.push("bg-yellow");
  }
  return classNames;
});

console.log(themeClass);

function getThemeClass() {
  console.log("getThemeClass");
  const classNames = ["wrapper"];
  if (isYellow.value) {
    classNames.push("bg-yellow");
  }
  return classNames;
}
</script>

<!--
  Vue 3 Composition API
<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import MyButton from "./components/MyButton.vue";
import { ref, computed } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TheWelcome,
    MyButton
  },
  setup() {
    const isYellow = ref(false);

    function toggleTheme() {
      isYellow.value = !isYellow.value;
    }

    const themeClass = computed(() => {
      console.log("themeClass computed");
      const classNames = ["wrapper"];
      if (isYellow.value) {
        classNames.push("bg-yellow");
      }
      return classNames;
    });

    function getThemeClass() {
      console.log("getThemeClass");
      const classNames = ["wrapper"];
      if (isYellow.value) {
        classNames.push("bg-yellow");
      }
      return classNames;
    }

    return {
      isYellow,
      toggleTheme,
      themeClass,
      getThemeClass,
    };
  },
};
}
</script>
-->

<!--
  Vue2 ou Vue 3 Options API
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
  data() {
    return {
      isYellow: false
    };
  },
  methods: {
    toggleTheme() {
      this.isYellow = !this.isYellow;
    },
    getThemeClass() {
      console.log("getThemeClass");
      const classNames = ["wrapper"];
      if (isYellow.value) {
        classNames.push("bg-yellow");
      }
      return classNames;
    }
  },
  computed: {
    themeClass() {
      console.log("themeClass computed");
      const classNames = ["wrapper"];
      if (this.isYellow) {
        classNames.push("bg-yellow");
      }
      return classNames;
    }
  }
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

    <div :class="themeClass">
      <p>theme is yellow : {{ isYellow }} {{ count }}</p>
      <p>method: {{ getThemeClass() }} computed: {{ themeClass }}</p>
      <MyButton title="Toggle theme" :onClick="toggleTheme" />
      <MyButton title="Add count" :onClick="add" />
      <my-button title="Hello2" v-bind:rounded="true" />
      <my-button title="Hello Green" color="green" />
      <!-- my-button title="Hello Yellow" color="yellow" /-->

      <HelloWorld msg="You did it!" msg2="test" />
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

.bg-yellow {
  background-color: yellow;
}
</style>
