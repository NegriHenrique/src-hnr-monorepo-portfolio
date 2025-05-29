import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@storybook/react-dom-shim/dist/react-18": "@storybook/react-dom-shim",
      "@storybook/react-dom-shim/dist/react-18.js": "@storybook/react-dom-shim",
      "@storybook/react-dom-shim/dist/react-18.mjs":
        "@storybook/react-dom-shim",
      "@storybook/react-dom-shim/dist/react-18.d.ts":
        "@storybook/react-dom-shim",
    },
  },
});
