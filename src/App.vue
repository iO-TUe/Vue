<script setup lang="ts">
import Header from './components/header.vue'
// console.log("Script: App")
</script>

<template>
  <!-- {{ console.log("Render: App") }} -->
  <div class="App">
    <Header />
    <main class="App-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.App-main {
  background-color: var(--main-background);
  height: calc(100vh - 114px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 0 2em;
}
</style>
