<template>
  <div>
    <h1>Home</h1>
    <div class="container">
      <div class="links">
        <h3>Props</h3>
        <router-link to="/props/buttons">buttons</router-link>
        <router-link to="/props/collapse">collapse</router-link>
        <hr />
        <router-link to="/tps">Tps</router-link>
        <hr />
        <router-link to="/custom-events">Custom events</router-link>
        <hr />
        <router-link to="/di">TodoList Di</router-link>
      </div>
      <div class="content"><router-view /></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.links {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>