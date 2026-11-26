import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { generateBillboardCatalog } from "./scripts/generate-billboard-catalog.mjs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,
    fs: {
      allow: ["./client", "index.html"],
      deny: [
        ".env",
        ".env.*",
        "*.{crt,pem}",
        "**/.git/**",
        "**/data/source/**",
      ],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [
    // Generate the same public catalog for the client and the PHP endpoint.
    {
      name: "publiex-billboard-catalog",
      config: () => {
        generateBillboardCatalog();
      },
    },
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./client"),
    },
  },
}));
