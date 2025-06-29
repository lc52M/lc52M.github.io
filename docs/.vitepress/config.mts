import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '个人总结',
  description: '记录成长',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: '首页', link: '/' }],

    sidebar: [
      {
        text: 'vitepress博客搭建',
        items: [
          {
            text: '使用VitePress和Github搭建个人博客，可以自动构建和发布',
            link: '/vitepress/blog',
          },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jzplp/jzplp.github.io' },
    ],
  },
})
