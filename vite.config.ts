import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),

      "@core": path.resolve(__dirname, "./src/core"),
      "@engine": path.resolve(__dirname, "./src/engine"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@world": path.resolve(__dirname, "./src/world"),
      "@scene": path.resolve(__dirname, "./src/scene"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@data": path.resolve(__dirname, "./src/data"),
    },
  },
});