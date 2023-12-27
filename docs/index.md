---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TSMoji"
  text: "🔥 Print ✨ emojis ✨ in TypeScript..."
  actions:
    - theme: brand
      text: Start now
      link: /installation

  image: /gitmoji.png
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #ffdd67 10%, #bd34fe);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #ffdd67 50%, #bd34fe);
  --vp-home-hero-image-filter: blur(44px);
}

:root img {
  border-radius: 22px;
  height: 256px;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>