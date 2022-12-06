import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  /* 文件目录结构的方式生成侧边栏  structure  */
  // "/blog/": "structure",

  /* 为每个单独的页面配置自己独有的sidebar */
  "/demo/": [
    "",
    {
      text: "指南—demo",
      link: "/demo/README.md",
      icon: "creative",
      children: "structure",
    },
  ],
  "/note/": [
    "",
    {
      icon: "notes",
      text: "note",
      link: "note/",
      children: "structure",
    },
  ],
});
