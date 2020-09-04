module.exports = {
  title: "lailailee'blog",
  description: 'learn and run',
  dest: 'public',
  plugins: [
    'ribbon',
    'go-top',
    [
      'vuepress-plugin-live2d',
      {
        modelName: 'shizuku',
        mobileShow: false,
      },
    ],
  ],
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: {
    serviceWorker: {
      updatePopup: true,
    },
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: 'Go',
        link: '/categories/Go/',
        icon: 'reco-other',
      },
      {
        text: '前端基础',
        link: '/views/面试知识点/JS基础知识/01.变量类型和计算.html',
        icon: 'reco-suggestion',
      },
      {
        text: 'TimeLine',
        link: '/timeLine/',
        icon: 'reco-date',
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'NPM',
            link: 'https://www.npmjs.com/settings/lailailee/packages',
            icon: 'reco-npm',
          },
          {
            text: 'GitHub',
            link: 'https://github.com/lailailee',
            icon: 'reco-github',
          },
        ],
      },
    ],
    type: 'blog',
    blogConfig: {
      category: {
        location: 4,
        text: 'Category',
      },
      tag: {
        location: 5,
        text: 'Tag',
      },
    },
    logo: '/head.png',
    search: true,
    searchMaxSuggestions: 10,
    // "sidebar": "auto",
    sidebarDepth: 2,
    displayAllHeaders: false,
    lastUpdated: 'Last Updated',
    author: 'lailailee',
    record: '',
    startYear: '2019',
    sidebar: {
      '/views/LeetCode/': [
        {
          title: '字符串类',
          collapsable: false,
          children: [
            '字符串类/01.罗马数字转整数',
            '字符串类/02.反转字符串中的单词 III',
            '字符串类/03.计数二进制子串',
          ],
        },
        {
          title: '数组类',
          collapsable: false,
          children: [
            '数组类/01.电话号码的组合',
            '数组类/02.格雷编码',
            '数组类/03.种花问题',
            '数组类/04.卡牌分组',
          ],
        },
        {
          title: '正则类',
          collapsable: false,
          children: ['正则类/01.正则表达式匹配', '正则类/02.重复的子字符串'],
        },
      ],
      '/views/Webpack/': [
        {
          title: 'webpack入门',
          collapsable: false,
          children: [
            'webpack入门/01.webpack简介以及五大核心概念',
            'webpack入门/02.Entry&Output',
            'webpack入门/03.Loader',
            'webpack入门/04.Plugins',
            'webpack入门/05.Modal',
            'webpack入门/06.Babel',
          ],
        },
        {
          title: 'webpack进阶',
          collapsable: false,
          children: [
            'webpack进阶/01.Loader-图片处理',
            'webpack进阶/02.Loader-打包样式上',
            'webpack进阶/03.Loader-打包样式下',
            'webpack进阶/04.Plugin-使打包更加便捷',
            'webpack进阶/05.Entry与Output的基本配置',
          ],
        },
      ],
      '/views/Go/': [
        {
          title: 'Go',
          collapsable: false,
          children: ['01.go使用gorm2连接sqlite3'],
        },
      ],
      '/views/Axios/': [
        {
          title: 'Axios',
          collapsable: false,
          children: ['01.axios使用拦截器拦截重复请求'],
        },
      ],
      '/views/End/': [
        {
          title: 'MongoDB',
          collapsable: false,
          children: [
            'MongoDB/01.使用docker安装mongodb',
            'MongoDB/02.mongodb增删改查',
            'MongoDB/03.robo3t连接mongodb',
            'MongoDB/04.mongodb备份和恢复',
            'MongoDB/05.mongoose简易使用',
            'MongoDB/06.mongoose实战配置',
          ],
        },
        {
          title: 'Redis',
          collapsable: false,
          children: [
            'Redis/01.Redis介绍',
            'Redis/02.使用docker安装Redis',
            'Redis/03.Redis Cli - 取值',
            'Redis/04.Redis GUI工具',
            'Redis/05.Redis Node.js集成',
          ],
        },
      ],
      '/views/面试知识点/': [
        {
          title: '面试知识点',
          collapsable: false,
          children: ['01.2020开始'],
        },
        {
          title: 'JS基础知识',
          collapsable: false,
          children: [
            'JS基础知识/01.变量类型和计算',
            'JS基础知识/02.原型和原型链',
            'JS基础知识/03.作用域和闭包',
            'JS基础知识/04.异步',
          ],
        },
        {
          title: 'JS-Web-API',
          collapsable: false,
          children: [
            'JS-Web-API/05.JS-Web-API-DOM.md',
            'JS-Web-API/06.JS-Web-API-BOM.md',
            'JS-Web-API/07.事件绑定和事件冒泡.md',
            'JS-Web-API/08.Ajax.md',
            'JS-Web-API/09.存储.md',
          ],
        },
        {
          title: '开发环境与优化',
          collapsable: false,
          children: [
            '开发环境与优化/10.开发环境.md',
            '开发环境与优化/11.网页加载过程.md',
            '开发环境与优化/12.性能优化.md',
          ],
        },
        {
          title: '高级知识点',
          collapsable: false,
          children: [
            '高级知识点/13.Vue与MVVM.md',
            '高级知识点/14.React与组件化.md',
            '高级知识点/15.ES6.md',
          ],
        },
      ],
    },
  },
  markdown: {
    lineNumbers: true,
  },
}
