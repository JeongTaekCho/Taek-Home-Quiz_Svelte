import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import PrettierPlugin from "vite-plugin-prettier";

export default defineConfig({
  plugins: [sveltekit(), PrettierPlugin()],
});
