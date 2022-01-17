<template>
  <div>
    <h1>Home</h1>
    <div class="container" @keyup.capture.alt.down="handleDuplicate">
      <div class="links">
        <span>Props</span>
        <router-link to="/props/buttons">Buttons</router-link>
        <router-link to="/props/list">List</router-link>
        <hr />
        <router-link to="/data">Data</router-link>
        <hr />
        <router-link to="/tp">Tps</router-link>
        <hr />
        <router-link to="/custom-event">Custom Events</router-link>
        <hr />
        <router-link to="/slots">Slots</router-link>
        <hr />
        <router-link to="/di">Di</router-link>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  flex: 1;
}
</style>
