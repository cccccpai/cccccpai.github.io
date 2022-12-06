import { defineUserConfig, viteBundler } from "vuepress";
import theme from "./theme.js";
// see:  https://v2.vuepress.vuejs.org/zh/reference/config.html#public
export default defineUserConfig({
  base: "/", //网站的前缀。默认：/
  // lang: "zh-CN", // HTML 中 <html> 标签的 lang 属性。默认：en-US
  // head: [['link', { rel: 'icon', href: '/images/logo.png' }]],, // HTML 的 <head> 标签 的额外标签。
  // title: "Docs Demo", // 将在 标签栏 中显示，默认：""，可作为上一级设置
  // description: "Demo ", // HTML 中 <meta name="description" /> 标签的 content 属性。会被每个页面的 Frontmatter 中的 description 字段覆盖。可作为上一级使用
  // locales: {}，// i18N本地化语言。可以使用的属性有： lang , title , description , head
  locales: {
    "/": {
      lang: "zh-CN", // HTML 中 <html> 标签的 lang 属性。默认：en-US，可作为上一级设置
      title: "文档演示", // 将在 标签栏 中显示，默认：""，可作为上一级设置
      description: "vuepress-theme-hope 的文档演示", // HTML 中 <meta name="description" /> 标签的 content 属性。会被每个页面的 Frontmatter 中的 description 字段覆盖。可作为上一级使用
    },
  },

  theme, //主题独有的配置

  /*  默认的打包工具为 vite，一般不建议修改 */
  // bundler: viteBundler({
  //   viteOptions: {}, //接收所有vite的配置   https://cn.vitejs.dev/config/
  //   vuePluginOptions: {},
  // }),

  /* 指定 vuepress build 的输出目录 */
  // dest: `${sourceDir}/.vuepress/dist`,

  /* 指定 静态资源 文件目录 */
  // public:`${sourceDir}/.vuepress/public`,
  shouldPrefetch: false,

  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],
});
