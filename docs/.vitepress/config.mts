import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "AkariBot",
    description: "澄明Bot",
    themeConfig: {
        logo: '/favicon.png',

        nav: [
            {text: '文档', link: '/docs/intro'},
        ],

        sidebar: {
            '/docs/': [
                {text: '✨ 插件简介', link: '/docs/intro'},
                {
                    text: '👋🏻 快速上手',
                    items: [
                        {text: '部署 Bot', link: '/docs/start/bot'},
                        {text: '安装插件', link: '/docs/start/plugin'}
                    ]
                },
                {
                    text: '🏷 基础教程',
                    items: [
                        {text: '插件命令', link: '/docs/basic/command'},
                    ]
                },
                {
                    text: '📖 进阶教程',
                    items: [
                        {text: 'JavaScript 脚本', link: '/docs/advanced/javascript'}
                    ]
                },
                {
                    text: '🛠️ 开发文档',
                    items: [
                        {
                            text: 'API',
                            items: [
                                {text: 'BotMessageAPI', link: '/docs/develop/api/botmessageapi'},
                            ]
                        }
                    ]
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/CPJiNan/AkariBot'}
        ],

        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索',
                                buttonAriaLabel: '搜索'
                            },
                            modal: {
                                displayDetails: '显示详细列表',
                                resetButtonTitle: '重置搜索',
                                backButtonTitle: '关闭搜索',
                                noResultsText: '没有结果',
                                footer: {
                                    selectText: '选择',
                                    selectKeyAriaLabel: '输入',
                                    navigateText: '导航',
                                    navigateUpKeyAriaLabel: '上箭头',
                                    navigateDownKeyAriaLabel: '下箭头',
                                    closeText: '关闭',
                                    closeKeyAriaLabel: 'esc'
                                }
                            }
                        }
                    }
                }
            }
        },

        editLink: {
            pattern: 'https://github.com/CPJiNan/AkariBotDocs/tree/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于'
        },

        notFound: {
            title: '页面未找到',
            quote:
                '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
            linkLabel: '前往首页',
            linkText: '带我回首页'
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
    },
    locales: {
        root: {label: '简体中文', lang: 'zh-CN'}
    },
    lastUpdated: true
})
