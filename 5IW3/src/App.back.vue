<!--
  Vue 3 Composition API
<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import MyButton from "./components/MyButton.vue";
import {
  ref,
  reactive,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TheWelcome,
    MyButton
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
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
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });

    return {
      isYellow,
      toggleTheme,
      themeClass,
      getThemeClass,
    };
  },
};
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
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  }
};
</script>
-->
