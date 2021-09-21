<template>
  <div>
    <p>
      Le but de l’exercice est de reproduire la page HTML en utilisant les
      données du composant Vue. Le bouton “Hide” doit faire disparaître de
      l’écran les éléments au status “completed” à true et changer le texte du
      bouton à “Show”, un clique de nouveau fera l’opération inverse. Un clique
      sur un item inversera le status “completed” de celui-ci.
    </p>
    <button>Hide</button>
    <ul>
      <li><a>Knife / completed</a></li>
      <li><a>Fork / not completed</a></li>
      <li><a>Plate / completed</a></li>
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
};
</script>

<style scoped>
</style>