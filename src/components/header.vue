<script setup lang="ts">
// console.log('Script: Header')
</script>

<template>
    <!-- {{ console.log('Render: Header') }} -->
    <nav class='App-navbar'>
        <svg class="App-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
            <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
                fill="#41b883" />
            <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
                fill="#34495e" />
        </svg>
    </nav>
</template>

<style scoped>
.App-navbar {
    padding: 30px 40px;
    background-color: var(--main-background);
}

.App-logo {
    height: 50px;
    pointer-events: none;
}
</style>
