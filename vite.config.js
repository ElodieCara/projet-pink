import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Projet-Pink/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    headers: {
      "Cache-Control": "max-age=3156000",
    },
  },
  build: {
    outDir: "dist",
  },
  rollupOptions: {
    input: {
      main: path.resolve(__dirname, "./src/main.jsx"),
    },
  },
});
