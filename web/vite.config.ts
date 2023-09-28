import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    root: './',
    build: {
        outDir: '../docs'
    },
    base: './'
})