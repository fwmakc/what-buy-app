import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: './',
  build: {
    outDir: 'dist',
    target: 'node18',
    minify: 'terser',
    terserOptions: {
      compress: {
        passes: 2,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
    ...(command === 'build'
      ? {
          rollupOptions: {
            external: ['fs', 'fs/promises', 'path', 'os'],
          },
        }
      : {}),
  },
  server: {
    port: 8090,
  },
}));
