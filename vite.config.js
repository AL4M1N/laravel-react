import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';


export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/website/app.jsx',
                'resources/js/admin/app.jsx',
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),  // Set up an alias for the 'resources/js' directory
        },
    },
    server: {
        proxy: {
            '/api': 'http://localhost:8000',  // Set up a proxy for API calls to the Laravel backend
        },
    },
});
