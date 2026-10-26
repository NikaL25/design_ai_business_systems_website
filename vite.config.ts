import { defineConfig, Plugin } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"

/**
 * SPA history fallback for the Vite dev server.
 *
 * Rewrites extensionless GET requests (client-side routes such as
 * /products/sales-manager) to `/` so Vite serves index.html. This lets users
 * refresh or deep-link into any route instead of getting a 404. Vite's own
 * internal requests (@vite, @fs, node_modules) and real files (anything with
 * an extension) are left untouched.
 */
function spaFallback(): Plugin {
  return {
    name: "spa-fallback",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || ""

        if (
          req.method === "GET" &&
          !url.includes(".") &&
        !url.startsWith("/@vite") &&
        !url.startsWith("/@react-refresh") &&
          !url.startsWith("/@fs") &&
          !url.startsWith("/node_modules")
        ) {
          req.url = "/"
        }

        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },

  server: {
    port: 8443,
  },
})
