module.exports = {
  title: 'WIKI',
  description: 'Just playing around',
  serviceWorker: true,
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ],
  themeConfig: {
    repo: 'xieyx/wiki',
    repoLabel: '查看源码',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/wiki/' },
    ],
    sidebar: {
      '/wiki/': [
        {
          title: '文档',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['', '首页'],
          ],
        },
      ],
    },
  }
}
