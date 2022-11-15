<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import MyButton from "./components/MyButton.vue";
import { ref, reactive, computed } from "vue";
import UserForm from "./components/UserForm.vue";

const isRed = ref(false);
const isGreen = ref(false);
const themeRef = ref({
  color: "blue",
  rounded: false,
});

const theme = reactive({
  color: "blue",
  rounded: false,
  button: {
    rounded: false,
  },
});

//isRed.value = true;
//console.log(isRed, isRed.value);
//
//theme.button.rounded = true;
//themeRef.value.rounded = true;
//themeRef.value = {
//  ...themeRef.value,
//  rounded: true,
//};

function toggleTheme(ref) {
  ref.value = !ref.value;
}
function toggleRed() {
  toggleTheme(isRed);
}
function toggleGreen() {
  toggleTheme(isGreen);
}

const content = "<h1>My content</h1>";

const themeClass = computed(() => ["wrapper", { "bg-red": isRed.value }]);

const buttonArray = ["riri", "fifi", "loulou", "donald", "daisy", "scrooge"];
const buttonObject = {
  riri: {
    color: "blue",
    rounded: false,
    onClick: () => alert("riri"),
  },
  fifi: {
    color: "red",
    rounded: true,
    onClick: () => alert("fifi"),
    masked: true,
  },
  loulou: {
    color: "green",
    rounded: false,
    onClick: () => alert("loulou"),
  },
};
</script>

<!--
Vue 3 Composition API verbose
<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { ref, reactive, computed } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TheWelcome,
  },
  setup() {
    const isRed = ref(false);
    const isGreen = ref(false);
    const themeRef = ref({
      color: "blue",
      rounded: false,
    });

    const theme = reactive({
      color: "blue",
      rounded: false,
      button: {
        rounded: false,
      },
    });
    const themeClass = computed(() => ["wrapper", { "bg-red": isRed.value }]);
    function toggleTheme() {
      isRed.value = !isRed.value;
    }
    return {
      isRed,
      isGreen,
      themeRef,
      theme,
      themeClass,
      toggleTheme,
    };
  },
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
    TheWelcome,
  },
  data() {
    return {
      isRed: false,
      isGreen: false,
      theme: {
        color: "blue",
        rounded: false,
        button: {
          rounded: false,
        },
      },
    };
  },
  methods: {
    toggleTheme() {
      this.isRed = !this.isRed;
    },
  },
  computed: {
    themeClass() {
      return ["wrapper", { "bg-red": this.isRed }];
    },
  },
};
</script>
-->

<template>
  <UserForm />
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div :class="themeClass">
      <h2 v-show="isRed && !isGreen">theme is red : {{ isRed }}</h2>
      <h2 v-if="isRed && !isGreen">theme is red : {{ isRed }}</h2>
      <h2 v-else-if="!isRed && isGreen">theme is green : {{ isGreen }}</h2>
      <h2 v-else>Theme is default</h2>

      <h2>theme : rounded {{ theme.rounded }}, color {{ theme.color }}</h2>
      {{ content }}
      <MyButton title="Click me" rounded color="red" :onClick="toggleRed" />
      <MyButton title="Click me" :rounded="false" color="blue" />
      <MyButton title="Click me" color="green" :onClick="toggleGreen" />
      <p v-html="content"></p>

      <HelloWorld msg="You did it!" msg2="test" />
      <MyButton v-for="value in buttonArray" :title="value" :key="value" />
      <div v-for="(value, key) in buttonArray" :key="index">
        {{ index }} - {{ value }}
        <MyButton :title="value" />
      </div>
      <br />
      Template<br />
      <template v-for="(value, key) in buttonObject" :key="key">
        <div v-if="!value.masked">
          {{ index }} - {{ key }} - {{ value }}
          <MyButton :title="key" v-bind="value" />
        </div>
      </template>
      Iterate Object<br />
      <div v-for="(value, key, index) in buttonObject" :key="key">
        {{ index }} - {{ key }} - {{ value }}
        <MyButton :title="key" :color="value.color" :rounded="value.rounded" />
      </div>
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
