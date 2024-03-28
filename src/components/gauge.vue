<script setup lang="ts">
import { defineProps, ref } from "vue"

const props = defineProps(['value', 'recurse'])
const bool = ref(false)

setTimeout(() => bool.value = props.recurse, 10)

console.log("Rerender: Gauge")
</script>

<template>
    <div role='feed' class="wrapper" @click="bool = true">
        <svg viewBox="0 0 120 120" class="gauge">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#18B6F6" />
                    <stop offset="1000%" stop-color="#AC7FF4" />
                </linearGradient>
            </defs>

            <circle r="56" cx="60" cy="60" stroke-width="8" style="fill: #000; stroke: #0000">
            </circle>

            <circle r="56" cx="60" cy="60" stroke-width="8" :style="`transform: rotate(-87.9537deg);
                stroke-dasharray: ${props.value * 3.51}, 351.858; fill:none; transform-origin:50%
                50%; stroke-linecap:round; stroke:url(#gradient)`"></circle>
        </svg>
        <span class="value">{{ props.value }}</span>
    </div>

    <div v-if="bool && props.value < 120" class="recurse">
        <Gauge :value="props.value + 1" :recurse=true />
        <Gauge :value="props.value + 5" :recurse=true />
    </div>
</template>

<style scoped>
.wrapper {
    position: relative;
}

.gauge {
    width: 100%;
    min-width: 100px;
}

.value {
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    font-size: 3rem;
    transform: translate(-50%, -50%);
    text-align: center;
}

circle {
    transition: all 150ms;

    &.stroke {
        transform: rotate(-87.9537deg);
        transform-origin: 50% 50%;
        stroke-linecap: round;
        stroke: url(#gradient);
        fill: none;
    }
}
</style>
