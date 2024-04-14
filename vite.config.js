import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Code-Script/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./src/main.jsx",
      },
    },
  },
});
