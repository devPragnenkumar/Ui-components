import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import * as packageJson from './package.json';
import terser from '@rollup/plugin-terser';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({ include: ['src/components/'] }), libInjectCss()],
    build: {
        lib: {
            entry: resolve('src', 'components/index.ts'),
            name: 'xsada-dsadsad-dsadad-react',
            formats: ['es'],
            fileName: (format) => `fdfsadsad-rds.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies), 'react/jsx-runtime'],
            plugins: [
                terser({
                    compress: {
                        drop_console: true,
                    },
                    format: {
                        comments: false,
                    },
                }),
            ],
        },
    },
});
