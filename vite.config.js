import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Code-Script/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./src/main",
      },
      output: {
        format: "es",
        entryFileNames: "[name].[hash].js",
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 3000,
  },
});
