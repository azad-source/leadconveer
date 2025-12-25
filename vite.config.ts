import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/leadconveer/',
  server: {
    open: true,
  },
  resolve: {
    alias: {
      variables: path.resolve(__dirname, 'src/variables.scss'),
    },
  },
});
