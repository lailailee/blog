module.exports = {
  "title": "lailailee'blog",
  "description": "learn and run ",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "NPM",
            "link": "https://www.npmjs.com/settings/lailailee/packages",
            "icon": "reco-npm"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/lailailee",
            "icon": "reco-github"
          },
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/head.png",
    "search": true,
    "searchMaxSuggestions": 10,
    // "sidebar": "auto",
    "sidebarDepth": 2,
    "displayAllHeaders": false,
    "lastUpdated": "Last Updated",
    "author": "lailailee",
    "record": "",
    "startYear": '2019',
    "sidebar": {
      '/views/LeetCode刷题/': [
        {
          title: '字符串类',
          collapsable: false,
          children: [
            '字符串类/01.罗马数字转整数',
            '字符串类/02.反转字符串中的单词 III',
            '字符串类/03.计数二进制子串',
          ]
        },
        {
          title: '数组类',
          collapsable: false,
          children: [
            '数组类/01.电话号码的组合',
            '数组类/02.格雷编码',
            '数组类/03.种花问题',
            '数组类/04.卡牌分组',
          ]
        },
        {
          title: '正则类',
          collapsable: false,
          children: [
            '正则类/01.正则表达式匹配',
            '正则类/02.重复的子字符串',
          ]
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
          ]
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
          ]
        },
      ]
    },
  },
  "markdown": {
    "lineNumbers": true
  }
}