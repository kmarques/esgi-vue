<template>
  <div>
    <p>
      Le but de l’exercice est de reproduire la page HTML en utilisant les
      données du composant Vue. Le bouton “Hide” doit faire disparaître de
      l’écran les éléments au status “completed” à true et changer le texte du
      bouton à “Show”, un clique de nouveau fera l’opération inverse. Un clique
      sur un item inversera le status “completed” de celui-ci.
    </p>
    <button @click="filter = !filter">{{ buttonTitle }}</button>
    <ul>
      <li
        @click="tools[name] = !value"
        v-for="(value, name) in tools"
        v-show="!filter || !value"
        :key="name"
      >
        {{ name }} {{ !value ? "not " : "" }}completed
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
      Plate: false,
      Spoon: true,
    },
    filter: false,
  }),
  computed: {
    buttonTitle: function () {
      return this.filter ? "Show" : "Hide";
    },
  },
};
</script>