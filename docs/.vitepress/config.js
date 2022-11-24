import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'FE-DEV',
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '最后更新',
    sidebar: getSidebar(),
  },
});

function getSidebar() {
  return [
    {
      text: '开发工具',
      collapsible: true,
      items: [
        { text: 'VsCode', link: '/guide/dev-tool/vscode' },
        { text: '浏览器', link: '/guide/dev-tool/browser' }
      ]
    },
  ];
}
