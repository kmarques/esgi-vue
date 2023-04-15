<!--
  Vue Composition API (en mode verbose)
<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
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

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheWelcome,
    Button
  },
  setup() {
    const isRed = ref(false);
    const theme = reactive({
      color: "red",
      backgroundColor: "white",
    });
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

    return {
      isRed,
      toggleTheme
    }
  }
}
</script>
-->

<!--
  Vue 2 ou Vue 3 Options API
<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Button from "./components/Button.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheWelcome,
    Button
  },
  data() {
    return {
      isRed: false
    }
  },
  methods: {
    toggleTheme () {
      this.isRed = !this.isRed
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {

  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
    console.log(this.isRed);
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  watch: {
    isRed(newValue, oldValue) {
      console.log("watch", newValue, oldValue);
    }
  },
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
