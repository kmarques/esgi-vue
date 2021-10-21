<template>
  <div>
    <p>
      Le but de l’exercice est de reproduire la page HTML en utilisant les
      données du composant Vue. Le bouton “Hide” doit faire disparaître de
      l’écran les éléments au status “completed” à true et changer le texte du
      bouton à “Show”, un clique de nouveau fera l’opération inverse. Un clique
      sur un item inversera le status “completed” de celui-ci.
    </p>
    <button @click="filters = !filters">
      {{ buttonTitle | capitalize | trunc(2) }}
    </button>
    <ul>
      <li
        v-show="!filters || !value"
        @click="tools[key] = !tools[key]"
        v-for="(value, key) in tools"
        :key="key"
      >
        {{ key }} {{ !value ? "not " : "" }}completed
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TpDirective",
  data: () => ({
    tools: {
      Knife: false,
      Fork: true,
      Spoon: false,
    },
    filters: false,
  }),
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    trunc(value, length) {
      if (!value) return "";
      return value.length > length ? value.slice(0, length) + "..." : value;
    },
  },
  computed: {
    buttonTitle() {
      return this.filters ? "show" : "hide";
    },
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
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style>
</style>