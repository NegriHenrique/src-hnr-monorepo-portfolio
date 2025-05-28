import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
    cors: true,
  },
  preview: {
    port: 3002,
    cors: true,
  },
  build: {
    outDir: "dist",
    assetsDir: ".",
    lib: {
      entry: "src/single-spa-entry.tsx",
      formats: ["system"],
      fileName: () => "bgremover.js",
    },
    rollupOptions: {
      external: ["react", "react-dom", "single-spa"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "single-spa": "singleSpa",
        },
      },
    },
  },
  define: {
    "process.env": {},
    process: {},
  },
});
