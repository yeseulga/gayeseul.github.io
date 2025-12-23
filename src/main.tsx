import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("🔥 main.tsx 실행됨");

const container = document.getElementById("root");

if (!container) {
  console.error("❌ root element를 찾지 못했습니다");
} else {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}