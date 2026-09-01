import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: false
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      input: {
        main: "index.html",
        lizing: "lizing/index.html",
        harakteristiki: "harakteristiki/index.html",
        shanmon388: "shanmon-388/index.html",
        zapchastiShanmon: "zapchasti-shanmon/index.html"
      }
    }
  }
});
