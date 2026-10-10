import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api/coingecko": {
          target: "https://api.coingecko.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/coingecko/, "/api/v3"),
          headers: env.COINGECKO_API_KEY
            ? { "x-cg-demo-api-key": env.COINGECKO_API_KEY }
            : {},
        },
      },
    },
  };
});
