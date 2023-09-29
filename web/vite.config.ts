import { defineConfig } from "vite";
import { resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  root: "./",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        eventsPlanning: resolve(__dirname, 'events-planning/index.html'),
        printOnDemand: resolve(__dirname, 'print-on-demand/index.html'),
      },
    },
  },
  base: "./",
});
