import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import Counter from './components/counter.vue'
import './main.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Counter,
            props: { initialValue: 80, maxValue: 13, recurse: true }
        },
        {
            path: '/load',
            component: Counter,
            props: { initialValue: 50, maxValue: 1000, recurse: false }
        }]
})

createApp(App).use(router).mount('#app')
