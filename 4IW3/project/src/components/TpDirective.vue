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
      <li>Knife not completed</li>
      <li>Fork completed</li>
      <li>Plate not completed</li>
      <li>Spoon completed</li>
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
};
</script>