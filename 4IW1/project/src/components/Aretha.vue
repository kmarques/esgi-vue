<template>
  <h1>{{ fullname }}</h1>
</template>

<script>
export default {
  name: "Aretha",
  data: () => ({
    lastname: "Franklin",
    firstname: "Aretha",
  }),
  computed: {
    fullname: function () {
      return [this.lastname, this.firstname].join(" ");
    },
  },
  watch: {
    fullname: function (value) {
      alert(value);
    },
  },
};
</script>