<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import MyButton from "./components/MyButton.vue";
import {
  ref,
  reactive,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
import UserForm from "./components/UserForm.vue";
import Modal from "./components/Modal.vue";
import List from "./components/List.vue";
import UserProvider from "./components/UserProvider.vue";
import UserView from "./views/UserView.vue";

const isYellow = ref(false);
const count = ref(0);
const themeRef = ref({
  color: "red",
  backgroundColor: "white",
});
themeRef.value = {
  color: "blue",
  backgroundColor: "white",
};

const theme = reactive({
  color: "red",
  backgroundColor: "white",
});
theme.color = "blue";

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

onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(() => {
  console.log("onMounted");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
  console.log(isYellow.value);
});
onUpdated(() => {
  console.log("onUpdated");
  console.log(isYellow.value);
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});
onUnmounted(() => {
  console.log("onUnmounted");
});

watch(isYellow, (newValue, oldValue) => {
  console.log("watch isYellow");
  console.log(newValue, oldValue);
});

const duckArray = ["riri", "fifi", "loulou", "donald", "daisy", "scrooge"];
const duckObject = {
  riri: {
    rounded: true,
    color: "red",
    masked: true,
  },
  fifi: {
    rounded: false,
    color: "blue",
  },
  loulou: {
    rounded: true,
    color: "green",
  },
  donald: {
    rounded: false,
    color: "blue",
    masked: true,
  },
  daisy: {
    rounded: true,
    color: "red",
  },
  scrooge: {
    rounded: false,
    color: "green",
    masked: true,
  },
};
</script>

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
      <h2 v-show="isYellow">I love Yellow theme (show)</h2>
      <h2 v-if="isYellow">I love Yellow theme</h2>
      <h2 v-else-if="!isYellow && count === 2">
        I dislike Yellow theme and I have 2 chicken
      </h2>
      <h2 v-else>I dislike everything</h2>

      <p>theme is yellow : {{ isYellow }} {{ count }}</p>
      <p>method: {{ getThemeClass() }} computed: {{ themeClass }}</p>
      <MyButton title="Toggle theme" :onClick="toggleTheme" />
      <MyButton title="Add count" :onClick="add" />
      <my-button v-if="isYellow" title="Hello2" v-bind:rounded="true" />
      <my-button title="Hello Green" color="green" />
      <!-- my-button title="Hello Yellow" color="yellow" /-->

      <HelloWorld msg="You did it!" msg2="test" />

      <MyButton
        v-for="(duck, index) in duckArray"
        :key="duck"
        :title="duck + ' ' + index"
      />
      <br />
      <template v-for="(duck, key, index) in duckObject" :key="key"
        ><MyButton
          v-if="!duck.masked"
          :title="key + ' ' + index"
          v-bind="duck"
        />
      </template>
    </div>
  </header>

  <main>
    <template v-if="isYellow">
      <h2>I love Yellow theme</h2>
      <template v-if="count === 2">
        <h2>I have 2 cats</h2>
      </template>
      <template v-else>
        <h2>I have {{ count }} chicken</h2>
      </template>
      <h2>I love Yellow theme</h2>
    </template>
    <div v-if="false">
      <List :items="duckArray"> </List>
      <List :items="duckObject">
        <template #item="{ item, index: property }">
          <MyButton :title="property" v-bind="item" />
        </template>
      </List>
      <List
        :actions="{
          add: false,
          edit: false,
          delete: false,
        }"
        :items="duckObject"
        :conditional-render="(item, title) => title !== 'riri'"
      >
        <template #item="{ item, index: title }">
          <span>{{ title }} - {{ JSON.stringify(item) }}</span>
        </template>
      </List>
    </div>
    <UserView />
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
