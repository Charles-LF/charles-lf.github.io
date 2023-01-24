import { defineUserConfig, ThemeConfig } from 'vuepress'

export default defineUserConfig<ThemeConfig>({
  lang: 'zh-CN',
  title: 'Charles',
  description: '欢迎来到Charles的小站',
  theme:'vuepress-theme-oxygen-not-included',
  themeConfig: {
    navbar: [
      {
        text: '学习笔记',
        children: [
          { text: 'Markdown 语法', link: '/learn/markdown.md' },
          { text: 'YAML 语法', link: '/learn/yaml.md' }
        ]
      },
      {
        text: '关于',
        children: [
          { text: '关于：《缺氧》', link: '/about/OxygenNotIncluded.html' }
        ]
      }
    ],
    logo: './icon/errand_research.png',
    repo: 'https://charles-lf.github.io',
    editLinkText: '编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    backToHome: '返回首页'
  },

})