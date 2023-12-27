import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TSMoji",
  description: "A VitePress Site",
  cleanUrls: true,
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/installation" },
    ],

    sidebar: [
      {
        text: "TSMoji",
        items: [
          {
            items: [
              { text: "Installation", link: "/installation" },
              { text: "License", link: "/license" },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Piarre/TSMoji" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Pierre IDE",
    },
  },
});
