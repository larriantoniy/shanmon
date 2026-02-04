import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: false
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false
  }
});
