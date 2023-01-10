import { defineConfig } from "vitepress";

export default defineConfig({
  title: "FE-DEV",
  lastUpdated: true,
  themeConfig: {
    nav: nav(),
    sidebar: {
      "/guide/": getSidebar(),
      "/config/": getConfig(),
    },
    lastUpdatedText: "最后更新",
  },
});


function nav() {
  return [
    { text: 'Guide', link: '/guide/resource-tool/vscode', activeMatch: '/guide/' },
    { text: 'Interview', link: '/interview/handwritten', activeMatch: '/interview/' },
  ]
}

function getSidebar() {
  return [
    {
      text: "资源&工具",
      collapsible: true,
      items: [
        { text: "VsCode", link: "/guide/resource-tool/vscode" },
        { text: "浏览器", link: "/guide/resource-tool/browser" },
        { text: "Obsidian", link: "/guide/resource-tool/obsidian" },
        { text: "Mac", link: "/guide/resource-tool/mac" },
      ],
    },
    {
      text: "前端资料",
      collapsible: true,
      items: [
        {
          text: "React",
          items: [
            { text: "性能", link: "/guide/fe/react/性能" },
            {
              text: "React + Typescript",
              link: "/guide/fe/react/ReactTypescript",
            },
          ],
        },
        {
          text: "TypeScript",
          items: [{ text: "基础", link: "/guide/fe/typeScript/basic" }],
        },
      ],
    },
  ];
}

function getConfig() {
  return [
    {
      text: "面试",
      collapsible: true,
      items: [
        {
          text: "手写题",
          link: "/interview/handwritten",
        },
      ],
    },
  ];
}
