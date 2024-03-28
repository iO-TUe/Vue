<script setup lang="ts">
import Counter from './components/Counter.vue'
import Headers from './components/header.vue'

console.log("Script: App")
</script>

<template>
  {{ console.log("Render: App") }}
  <div class="app">
    <Headers />
    <main class="App-main">
      <Counter :initialValue="95" />
    </main>
  </div>
</template>

<style scoped>
.App {
  text-align: center;
}

.App-main {
  background-color: var(--main-background);
  height: calc(100vh - 114px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}
</style>
