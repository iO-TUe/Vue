<script setup lang="ts">
import Item from '../components/item.vue'
import Counter from '../components/counter.vue'
import { ref } from "vue"

let id = 0
const items: { id: number; text: string }[] = ref([])
let input = ref("")

function addItem({ key }: KeyboardEvent) {
    if (key === "Enter" && input) {
        items.value.push({ id: id++, text: input.value })
        input.value = ""
        // items = items
    }
}

function removeItem(rid) {
    items.value = items.value.filter(({ id }) => id !== rid)
}
</script>

<template>
    <section id="todo">
        <label>
            <h2>Add new item</h2>
            <input id="input" v-model="input" @keyup="addItem" />
        </label>
        <ul class="list">
            <Item v-for="item in items" :key="item.id" :item="item" :remove="removeItem" />
        </ul>
    </section>
    <section id="counters">
        <Counter :initialValue="50" :maxValue=500 :recurse="false" />
    </section>
</template>
<style>
input {
    width: 100%;
}

.list {
    padding-inline-start: 0;
}

#counters .counters {
    display: flex;
}
</style>
