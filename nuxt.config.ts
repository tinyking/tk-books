export default defineNuxtConfig({
  extends: ["docus"],
  site: {
    name: "阅微书屋",
  },
  appConfig: {
    header: {
      title: "阅微书屋",
    },
    seo: {
      title: "阅微书屋",
      description: "个人成长与日常学习中的图书收藏",
    },
    github: false,
  },
  fonts: {
    providers: {
      google: false,
      googleicons: false,
    },
  },
  icon: {
    clientBundle: {
      icons: [
        "lucide:book-open",
        "lucide:bookmark",
        "lucide:lightbulb",
        "lucide:tags",
        "lucide:trending-up",
        "lucide:share-2",
        "lucide:search",
        "lucide:moon",
        "lucide:sun",
        "lucide:arrow-right",
        "lucide:menu",
        "lucide:x",
      ],
      scan: false,
    },
  },
  vite: {
    optimizeDeps: {
      include: [],
    },
  },
});
