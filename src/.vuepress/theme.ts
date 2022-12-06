import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

// hope 主题特有的目录，see: https://vuepress-theme-hope.github.io/v2/zh/config/
export default hopeTheme({
  /* 当前网站部署的域名 */
  hostname: "https://cccccpai.github.io",

  /* 作者信息,将会显示的默认作者 */
  author: {
    name: "CZW",
    url: "https://github.com/cccccpai/cccccpai.github.io",
    email: "1219946450@qq.com",
  },

  darkmode: "toggle",

  headerDepth: 2,

  /* 是否显示 全屏显示 */
  fullscreen: true,

  /* 显示 返回顶部 的图标 */
  backToTop: true,

  /* 纯净模式，禁止一切花里胡哨功能 */
  // pure: true,

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "cccccpai/cccccpai.github.io",

  docsRepo: "cccccpai/cccccpai.github.io",

  docsBranch: "main",

  docsDir: "src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word", "PageView"],

  copyright: "contact me: 1219946450@qq.com",

  locales: {
    "/": {
      // navbar  导航栏配置
      navbar: zhNavbar,

      // sidebar  侧边栏配置
      sidebar: zhSidebar,

      //  末尾脚注配置
      // footer: "contact me: 1219946450@qq.com",

      // 是否显示末尾的脚注
      // displayFooter: true,

      // 页面元信息，每一个文章的末尾都会有这些信息，可以被每个文章的头 FrontMater 覆盖
      metaLocales: {
        // 编辑链接
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  /* 加密配置 */
  encrypt: {
    global: false, // 是否开启全局加密，开启则所有文章都加密
    admin: "czwlinux", // 超级密码
    // 可配置单独的加密。 键名为匹配的路径，键值为对应的密码，接受字符串或字符串数组。
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  /* 主题色选择器 */
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  /* 插件配置 */
  plugins: {
    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // comment: {
    /**
     * Using Giscus
     */
    // provider: "Giscus",
    // repo: "vuepress-theme-hope/giscus-discussions",
    // repoId: "R_kgDOG_Pt2A",
    // category: "Announcements",
    // categoryId: "DIC_kwDOG_Pt2M4COD69",
    /**
     * Using Twikoo
     */
    // provider: "Twikoo",
    // envId: "https://twikoo.ccknbc.vercel.app",
    /**
     * Using Waline
     */
    // provider: "Waline",
    // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //           {
    //             src: "/assets/icon/guide-monochrome.png",
    //             sizes: "192x192",
    //             purpose: "monochrome",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
