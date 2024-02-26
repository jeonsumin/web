import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import axios from 'axios'
const http = axios.create({
    // baseURL:'https://api.notion.com',
    baseURL:'https://thingproxy.freeboard.io/fetch/https://api.notion.com',
    widthCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`,
    }
})
app.config.globalProperties.$axios = http;

app.use(router)

app.mount('#app')
