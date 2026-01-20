# BotMessageAPI

## 概览

**Bot 消息接口** `BotMessageAPI` 是 `top.cpjinan.akaribot.bot` 包下的接口。

它提供了发送、转发、撤回消息等功能。

## 用例

1. 发送私聊文本消息

    ``` kotlin
    BotMessageAPI.sendPrivateMsg(2759278070, "这是一条私聊文本消息")
    ```

2. 发送群聊文本消息

    ``` kotlin
    BotMessageAPI.sendGroupMsg(704109949, "这是一条群聊文本消息")
    ```

## 方法列表

``` kotlin
package top.cpjinan.akaribot.bot

/**
 * AkariBot
 * top.cpjinan.akaribot.bot
 *
 * Bot 消息 API。
 *
 * @author 季楠
 * @since 2026/1/17 21:48
 */
object BotMessageAPI {
    /**
     * 发送私聊文本消息。
     *
     * @param userId 对方 QQ 号。
     * @param message 要发送的内容。
     * @return 响应体字符串。
     */
    @JvmStatic
    fun sendPrivateMsg(userId: Long, message: String): String

    /**
     * 发送群聊文本消息。
     *
     * @param groupId 群号。
     * @param message 要发送的内容。
     * @return 响应体字符串。
     */
    @JvmStatic
    fun sendGroupMsg(groupId: Long, message: String): String
}
```