import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/projet-pink/",
  plugins: [react()],
  esbuild: {
    loader: "jsx",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  server: {
    headers: {
      "Cache-Control": "max-age=3156000",
    },
  },
});
