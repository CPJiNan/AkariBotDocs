# BotPerformCommand - Bot 执行命令

## 脚本介绍

向 Bot 发送 `/执行命令 xxx` 消息时，Bot 会以控制台身份执行 `/xxx` 命令，并回复执行结果。

## 脚本配置

在 `users` 项的 `[]` 内填写白名单 QQ 号，使用 `,` 分割。

``` javascript
var users = [2759278070];
```

在 `groups` 项的 `[]` 内填写白名单群号，使用 `,` 分割。

``` javascript
var groups = [704109949, 983034842];
```