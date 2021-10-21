<template>
  <div>
    <p>
      Le but de l’exercice est de reproduire la page HTML en utilisant les
      données du composant Vue. Le bouton “Hide” doit faire disparaître de
      l’écran les éléments au status “completed” à true et changer le texte du
      bouton à “Show”, un clique de nouveau fera l’opération inverse. Un clique
      sur un item inversera le status “completed” de celui-ci.
    </p>
    <button @click="filter = !filter">
      {{ buttonTitle | capitalize | trunc(2) }}
    </button>
    <ul>
      <li v-for="(value, name) in tools" :key="name" v-show="!filter || !value">
        <a href="#" @click.prevent="tools[name] = !value"
          >{{ name }} / {{ value ? "completed" : "incompleted" }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TPDirective",
  data: () => ({
    tools: {
      Knife: true,
      Fork: false,
      Plate: true,
    },
    filter: false,
  }),
  computed: {
    buttonTitle() {
      return this.filter ? "show" : "hide";
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
  filters: {
    capitalize(value) {
      return value
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    },
    trunc(value, length) {
      return value.slice(0, length);
    },
  },
};
</script>

<style scoped>
</style>