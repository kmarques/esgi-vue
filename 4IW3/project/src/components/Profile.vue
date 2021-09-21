<template>
  <div>
    <p>{{ lastname }} {{ firstname }}</p>
    <p>{{ lastname + " " + firstname }}</p>
    <p>{{ fullname }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    lastname: String,
    firstname: String,
  },
  computed: {
    fullname: function () {
      return this.lastname + " " + this.firstname;
    },
  },
};
</script>