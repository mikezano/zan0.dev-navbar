import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/navbar/" : "/",
  plugins: [
    federation({
      name: "navbar",
      filename: "remoteEntry.js",
      manifest: true,
      exposes: {
        // The template is the concrete, fully-composed navbar — this is what
        // the root shell (and any other consumer) imports via navbar/Navbar.
        "./Navbar": "./src/components/templates/SiteNavbar",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^19.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
        "react-router-dom": { singleton: true, requiredVersion: "^7.0.0" },
      },
    }),
    react(),
  ],
  server: {
    port: 3001,
    strictPort: true,
    origin: "http://localhost:3001",
  },
  preview: {
    port: 3001,
    strictPort: true,
  },
}));
