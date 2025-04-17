import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { globSync } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";

export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      origin: "http://localhost:3000",
      port: 3000,
      strictPort: true,
    },
    build: {
      rollupOptions: {
        input: Object.fromEntries(
          globSync("src/*/main.*(ts|tsx|js|jsx)").map((file) => {
            return [
              path.relative(
                "src",
                file.slice(0, file.length - path.basename(file).length),
              ),
              fileURLToPath(new URL(file, import.meta.url)),
            ];
          }),
        ),
        output: {
          assetFileNames: "[name].[hash][extname]",
          entryFileNames: "[name].[hash].js",
        },
      },
      outDir: "./vite-build",
      emptyOutDir: true,
    },
  };
});
