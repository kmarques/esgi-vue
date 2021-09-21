<template>
  <div>
    <h1>{{ finalName }}</h1>
  </div>
</template>

<script>
export default {
  name: "Aretha",
  data: () => ({
    lastname: "Franklin",
    firstname: "Aretha",
  }),
  computed: {
    finalName: function () {
      return this.lastname + " " + this.firstname;
    },
  },
  watch: {
    finalName: function (val) {
      alert(val);
    },
  },
};
</script>