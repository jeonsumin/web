import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import axios from 'axios'
const http = axios.create({
    baseURL:'https://api.notion.com',
    headers: {
        'Notion-Version': '2022-06-28',
        'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`
    }
})
app.config.globalProperties.$axios = http;

app.use(router)

app.mount('#app')
