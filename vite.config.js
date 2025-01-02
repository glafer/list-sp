import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
    base:'/listas-sp/',
    plugins: [preact()],
    build: {
        outDir: 'public',
        emptyOutDir: true,
    },
});
