import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// 브라우저용 crypto polyfill
import { Buffer } from "buffer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/gayeseul.github.io/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      crypto: "crypto-browserify", // crypto polyfill
      buffer: "buffer", // Buffer polyfill
    },
  },
  define: {
    global: {}, // 일부 라이브러리용 글로벌 객체
  },
}));