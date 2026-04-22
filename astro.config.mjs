import { defineConfig } from "astro/config";

const site = "https://techdoctor.be";

export default defineConfig({
  site,
  base: "/",
  server: {
    port: 4321,
    host: true
  }
});
