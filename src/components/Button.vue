<script setup lang="ts">
import { defineProps } from "vue"

const props = defineProps<{ count: number, fn: Function, sign: string }>()

console.log(`Rerender: "${props.sign}" Button`)
</script>

<template>
    <button class="button" :disabled="props.count === 0" @click="props.fn()"
        :aria-label="props.sign">
        {{ props.sign }}
    </button>
</template>

<style scoped>
/* BUTTONS -------------------------------------- */
.button {
    background: var(--qwik-dirty-black);
    border: none;
    border-radius: 8px;
    color: white;
    padding: 8px 5px 5px;
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
    min-width: 50px;

    &:not([disabled]):hover {
        cursor: pointer;
        background: var(--qwik-dark-blue);
    }

    &[disabled] {
        filter: opacity(0.7);
    }
}
</style>
