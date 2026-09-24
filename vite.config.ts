import { defineConfig } from "@lovable.dev/vite-tanstack-config"

export default defineConfig({
  vite: {
    base: "/eduardo-yahot-online-portfolio/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },

    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
    },
  },

  nitro: true,
})