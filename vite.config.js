import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/TBID/", // Match your GitHub repo name (e.g. /repo-name/)
});
