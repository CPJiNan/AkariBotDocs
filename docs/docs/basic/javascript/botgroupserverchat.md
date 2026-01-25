# BotGroupServerChat - Bot 群服消息互通

## 脚本介绍

聊天消息会在 **服务器** 和 **QQ 群** 间互相转发。

## 脚本配置

将 `enable` 项设置为 `true`。

``` javascript
var enable = true;
```

在 `groups` 项的 `[]` 内填写白名单群号，使用 `,` 分割。

``` javascript
var groups = [704109949];
```

## 常见问题

### 1. 如何自定义消息格式？

修改 `onBotPost` 和 `onAsyncPlayerChat` 方法的参数。

``` javascript
// QQ 群 -> 服务器
Bukkit.getServer().broadcastMessage("§8[§f群聊§8] §f" + sender + "§7: §f" + message);
// 服务器 -> QQ 群
BotMessageAPI.sendGroupTextMsg(groups[i], "[服务器] " + event.getPlayer().getName() + ": " + event.getMessage());
```

### 2. 如何关闭服务器向 QQ 群转发消息？

删除 `onAsyncPlayerChat` 方法。

``` javascript
function onPluginEnable() {
    onBotPost();
}
```