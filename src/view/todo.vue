<script setup lang="ts">
import Item from '../components/item.vue'
import Counter from '../components/counter.vue'
import { ref, type Ref } from "vue"

let id = 0
const items = ref<{ id: number; text: string }[]>([])
const input = ref("")

function addItem({ key }: KeyboardEvent) {
    if (key === "Enter" && input.value) {
        items.value.push({ id: id++, text: input.value })
        input.value = ""
    }
}

function removeItem(rid: number) {
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
