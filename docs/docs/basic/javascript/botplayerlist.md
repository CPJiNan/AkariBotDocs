# BotPlayerList - Bot 玩家列表命令

## 脚本介绍

向 Bot 发送 `/玩家列表` 消息时，Bot 会回复服务器当前玩家列表。

## 常见问题

### 1. 如何自定义回复消息内容？

修改 `onBotPostEvent` 方法的参数。

``` javascript
var playerListMessage = "服务器当前有 " + players.length + " 个玩家在线：" + "\\n" + playerNames.join(", ");
var emptyPlayerListMessage = "服务器当前有 0 个玩家在线。";
```