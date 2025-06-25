// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import node from "@astrojs/node";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	prefetch: true,
	image: {
		service: sharpImageService(),
	},
	site: "https://portfolio.amedura.me",
	integrations: [icon(), sitemap(), react()],
	output: "server",
	adapter: node({ mode: "standalone" }),
});
