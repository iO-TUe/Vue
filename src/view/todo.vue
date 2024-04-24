<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Counter from '../components/counter.vue'
import Item from '../components/item.vue'

let id = 0
const items = ref<{ id: number; text: string }[]>([])
const input = ref<HTMLInputElement>()

function addItem() {
    if (input.value) {
        items.value.push({ id: id++, text: input.value.value })
        input.value.value = ""
    }
}

function removeItem(rid: number) {
    items.value = items.value.filter(({ id }) => id !== rid)
}

onMounted(() => {
    input.value!.disabled = false
})
</script>

<template>
    <section id="todo">
        <label>
            <h2>Add new item</h2>
            <input ref="input" id="input" @keyup.enter="addItem" disabled />
        </label>
        <ul class="list">
            <Item v-for="item in items" :key="item.id" :item="item" :remove="removeItem" />
        </ul>
    </section>
    <section id="counters">
        <Counter :initialValue="50" :maxValue=5 :recurse="false" />
    </section>
</template>

<style>
input {
    width: 100%;
}

.list {
    padding-inline-start: 0;
}

#counters {
    height: 10vh;
}

#counters .counters {
    display: flex;
}
</style>
