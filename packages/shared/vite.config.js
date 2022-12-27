import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "shared-core-lib",
      fileName: "index",
      formats: ["es", "umd"],
    },
    outDir: "build",
  },
});
