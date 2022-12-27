import { resolve } from "path";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "firebase-functions-lib",
      fileName: "index",
      formats: ["es", "umd"],
    },
    outDir: "build",
    rollupOptions: {
      external: Object.keys(dependencies),
    },
  },
});
