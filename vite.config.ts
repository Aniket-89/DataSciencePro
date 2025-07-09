import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";
import viteCompression from "vite-plugin-compression";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    imagetools(),
    viteCompression({ algorithm: "brotliCompress" }),
    ,
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["framer-motion"],
          gsap: ["gsap"],
          icons: ["react-icons/md", "react-icons/fa", "react-icons/gi"], // whatever you use
        },
      },
    },
  },
});
