<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Button from "./components/Button.vue";
import {
  ref,
  reactive,
  watch,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

const isRed = ref(false);
const isGreen = ref(false);
const themeRef = ref({
  color: "red",
  backgroundColor: "white",
});
themeRef.value = {
  color: "blue",
  backgroundColor: "white",
};
themeRef.value.color = "green";

const themeReactive = reactive({
  color: "red",
  backgroundColor: "white",
});
themeReactive.color = "blue";

console.log("isRed", isRed, isRed.value);

function toggleTheme() {
  isRed.value = !isRed.value;
}

// Event listener for component lifecycle
onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(() => {
  console.log("onMounted");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
  console.log(isRed.value);
});
onUpdated(() => {
  console.log("onUpdated");
  console.log(isRed.value);
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});
onUnmounted(() => {
  console.log("onUnmounted");
});

// Event listener on variable change
watch(isRed, (newValue, oldValue) => {
  console.log("watch", newValue, oldValue);
});

const buttonsArray = ["riri", "fifi", "loulou", "donald", "daisy", "scrooge"];
// Objet de boutons
const buttonsObject = {
  riri: {
    color: "red",
    foo: "true",
    masked: true,
  },
  fifi: {
    color: "blue",
  },
  loulou: {
    color: "green",
    rounded: true,
  },
  donald: {
    color: "yellow",
    masked: true,
  },
  daisy: {
    color: "pink",
  },
  scrooge: {
    color: "orange",
    onClick: () => {
      console.log("scrooge");
    },
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

    <div :class="['wrapper', { 'bg-red': isRed }]">
      <p>Theme is red: {{ isRed }}</p>
      <h2 v-show="isRedghg && !isGreen">I love Red theme</h2>
      <h2 v-if="isRed && !isGreen">I love Red theme</h2>
      <h2 v-else-if="isGreen && !isRed">I love Green theme</h2>
      <h2 v-else>I dislike theme</h2>
      <Button title="Toggle Red theme" color="red" :onClick="toggleTheme" />
      <Button title="<table><tr>Hello 2</tr></table>" />
      <Button title="Hello 2" v-bind:rounded="true" />
      <HelloWorld msg="You did At!" id="4" msg2="test" />
      <HelloWorld msg="You did It!" />
      <HelloWorld msg="You did Up!" />
      <div v-for="(cbutton, index) in buttonsArray" :key="index">
        <Button :title="cbutton" />
      </div>
      <template v-for="(cbutton, key, index) in buttonsObject" :key="key">
        <Button
          :title="key + ' ' + index"
          v-bind="cbutton"
          v-if="!cbutton.masked"
        />
      </template>
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
