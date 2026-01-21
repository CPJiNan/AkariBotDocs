# 部署环境

欢迎使用 AkariBot！本篇教程将帮助你进行环境部署。

## 环境需求

使用插件前，服务器需要安装 [QQ 客户端](https://im.qq.com/index/)。

此外，还需要安装支持 **OneBot 11** 协议的 QQ
机器人框架，例如 [LuckyLilliaBot](https://github.com/LLOneBot/LuckyLilliaBot/releases/latest)。

本篇教程将以 **LLBot** 为例进行部署。

## LLBot 配置

### 登入机器人 QQ

1. 打开 `LLBot-Desktop` 客户端。
2. 进入 `控制面板` 页面，点击下方的 `启动` 按钮。
3. 弹出登入框后，使用扫码登入或账号密码登入机器人 QQ。

### Bot 配置

1. 进入 `Bot 配置` 页面，勾选 `OneBot 11` > `启用 OneBot 11`。
2. 在 `HTTP 服务端` 配置页，勾选 `启用` 并设置端口为 `3000`。
3. 在 `WebHook` 配置页，勾选 `启用` 并设置 URL 为 `http://127.0.0.1:5700`。
4. 点击右下角的 `保存` 按钮。

## 下一步

- [安装插件](/docs/basic/start/install)