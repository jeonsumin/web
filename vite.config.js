import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    server: {
        port: 3000,
        proxy: {
            '/v1': {
                target: 'https://api.notion.com',
                rewrite: (path) => path.replace(/^\/v1/,''),
                changeOrigin: true,
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
