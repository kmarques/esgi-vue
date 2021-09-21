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
      return this.lastname + " " + this.firstname;
    },
  },
  watch: {
    fullname: function (val) {
      alert(val);
    },
  },
};
</script>