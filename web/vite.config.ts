import { defineConfig } from "vite";
import { resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  root: "./",
  build: {
    outDir: "../docs",

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        eventsPlanning: resolve(__dirname, 'events-planning.html'),
        printOnDemand: resolve(__dirname, 'print-on-demand.html'),
      },
    },
  },
  base: "./",
});
