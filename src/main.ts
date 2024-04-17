import App from '@/App.vue'
import Counter from '@/components/counter.vue'
import Todo from '@/view/todo.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './main.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: Counter,
        props: { initialValue: 80, maxValue: 12, recurse: true }
    }, {
        path: '/load',
        component: Counter,
        props: { initialValue: 50, maxValue: 1000, recurse: false }
    }, {
        path: '/todo',
        component: Todo
    }]
})

createApp(App).use(router).mount('#app')
