import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// 브라우저용 crypto polyfill
import { Buffer } from "buffer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/gayeseul.github.io/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()], // componentTagger 제거
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      crypto: "crypto-browserify",
      buffer: "buffer",
    },
  },
  define: {
    global: {},
  },
});