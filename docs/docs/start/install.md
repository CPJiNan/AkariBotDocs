# 安装插件

欢迎使用 AkariBot！本篇教程将帮助你进行插件初始化配置。

## 插件下载

| 构建版本                                                                                                                                                    | 发行时间                                                                                                                                                   | 发行者                                                                                                                                                        |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](https://img.shields.io/badge/dynamic/json?label=version&amp;query=$.tag_name&amp;url=https://api.github.com/repos/CPJiNan/AkariBot/releases/latest) | ![](https://img.shields.io/badge/dynamic/json?label=date&amp;query=$.created_at&amp;url=https://api.github.com/repos/CPJiNan/AkariBot/releases/latest) | ![](https://img.shields.io/badge/dynamic/json?label=author&amp;query=$.author.login&amp;url=https://api.github.com/repos/CPJiNan/AkariBot/releases/latest) | 

- **GitHub**：[https://github.com/CPJiNan/AkariBot/releases](https://github.com/CPJiNan/AkariBot/releases)
- **QQ 群**：[704109949](https://qm.qq.com/q/91DcdBuRvW)

## 全局设置

你可以在 `plugins/AkariBot/settings.yml` 文件中修改语言、数据存储方式等设置。

``` yaml
# 全局设置
Options:
  # 语言
  Language: "zh_CN"
  # 配置文件版本
  Config-Version: 1
  # 检查版本更新
  Check-Update: true
  # OP 版本更新通知
  OP-Notify: true
  # 启用 bStats 统计
  Send-Metrics: true
  # 启用调试模式
  Debug: false

# 数据库设置
Database:
  # 存储方式 (MYSQL, SQLITE)
  Type: SQLITE
  # MySQL 存储设置
  MYSQL:
    host: localhost
    port: 3306
    user: root
    password: password
    database: minecraft
  # SQLite 存储设置
  SQLITE:
    file: sqlite.db

# Bot 设置
Bot:
  # HTTP 设置
  HTTP:
    url: http://127.0.0.1:3000
  # WebHook 设置
  WebHook:
    enable: true
    port: 5700
```

## 下一步

- [插件命令](/docs/basic/command)