# JavaScript 脚本

AkariBot 提供了对 JavaScript 的支持，使用 Nashorn 引擎执行 JavaScript 代码。

## 生命周期

| 生命周期              | 触发时机        |
|-------------------|-------------|
| `onServerEnable`  | 服务器启动       |
| `onServerDisable` | 服务器关闭       |
| `onPluginEnable`  | 服务器启动、插件重载后 |
| `onPluginDisable` | 服务器关闭、插件重载前 |

## 内置依赖

在自定义脚本中，以下类可被直接调用。

``` javascript
var Bukkit = Packages.org.bukkit.Bukkit;
var PluginManager = Bukkit.getPluginManager();
var EventPriority = Packages.org.bukkit.event.EventPriority;

var AkariBot = PluginManager.getPlugin("AkariBot");

var BotMessageAPI = Packages.top.cpjinan.akaribot.bot.BotMessageAPI;

var Command = Packages.top.cpjinan.akaribot.script.ScriptCommand;
var Listener = Packages.top.cpjinan.akaribot.script.ScriptListener;
var Task = Packages.top.cpjinan.akaribot.script.ScriptTask;
var Placeholder = Packages.top.cpjinan.akaribot.script.ScriptPlaceholder;
var Database = Packages.top.cpjinan.akaribot.database.Database;

var BotPostEvent = Packages.top.cpjinan.akaribot.event.BotPostEvent;
var PluginReloadEvent = Packages.top.cpjinan.akaribot.event.PluginReloadEvent;

var HttpUtils = Packages.top.cpjinan.akaribot.utils.HttpUtils;
```

## 脚本命令

``` javascript
function onPluginEnable() {
    // 注册命令。
    registerCommand();
}

function registerCommand() {
    new Command("example")
        .setNameSpace("akaribot")                     // 设置命名空间。
        .setAliases(["alexample"])                      // 设置命令别名。
        .setDescription("AkariBot 示例脚本命令")        // 设置命令描述。
        .setUsage("/example <player>")                  // 设置命令用法。
        .setPermission("akaribot.command.example")    // 设置所需权限。
        .setPermissionMessage("§c你没有权限使用此命令.")   // 设置无权限提示。
        // 设置命令执行器。
        .setExecutor(function (sender, command, label, args) {
            if (args.length === 0) {
                sender.sendMessage("§6用法: /example <player>");
                return true;
            }
            
            var playerName = args[0];
            var player = Bukkit.getPlayer(playerName);
            
            if (player === null) {
                sender.sendMessage("§c玩家 " + playerName + " 离线.");
                return true;
            }
            
            sender.sendMessage("§a玩家 " + player.getName() + " 在线.");
            return true;
        })
        // 设置 Tab 补全。
        .setTabCompleter(function (sender, command, label, args) {
            if (args.length === 1) {
                var players = [];
                var onlinePlayers = Bukkit.getOnlinePlayers().toArray();
                for (var i = 0; i < onlinePlayers.length; i++) {
                    players.push(onlinePlayers[i].getName());
                }
                return players;
            }
            return [];
        })
        // 注册命令。
        .register();
}
```

## 脚本监听器

``` javascript
function onPluginEnable() {
    // 注册监听器。
    registerListener();
}

function registerListener() {
    // 玩家进服事件。
    new Listener(PlayerJoinEvent.class)
        // 设置事件处理器。
        .setExecutor(function (event) {
            var playerName = event.getPlayer().getName();
            Bukkit.broadcastMessage("§8[§a+§8]§b" + playerName);
        })
        // 注册监听器。
        .register();

    // 玩家退出事件。
    new Listener(PlayerQuitEvent.class)
        // 设置事件处理器。
        .setExecutor(function (event) {
            var playerName = event.getPlayer().getName();
            Bukkit.broadcastMessage("§8[§c-§8]§b" + playerName);
        })
        // 注册监听器。
        .register();
}
```

## 脚本任务

``` javascript
function onPluginEnable() {
    // 注册调度任务。
    registerTask();
}

function registerTask() {
    // 延时任务。
    new Task()
        // 设置任务逻辑。
        .setTask(function () {
            Bukkit.broadcastMessage("§e这是一个延迟任务.");
        })
        .setDelay(100)  // 设置延迟 5 秒。
        .register();    // 注册任务。

    // 定时任务。
    new Task()
        // 设置任务逻辑。
        .setTask(function () {
            Bukkit.broadcastMessage("§e这是一个定时任务.");
        })
        .setAsync(true) // 设置异步。
        .setDelay(200)  // 设置延迟 10 秒。
        .setPeriod(200) // 设置每 10 秒执行一次。
        .register();    // 注册任务。
}
```

## 脚本变量

``` javascript
function onPluginEnable() {
    // 注册 PlaceholderAPI 变量。
    registerPlaceholder();
}

function registerPlaceholder() {
    new Placeholder("example")
        .setAuthor("季楠")       // 设置作者。
        .setVersion("1.0.0")    // 设置版本。
        // 设置变量处理器。
        .setExecutor(function (player, args) {
            if (player === null) {
                return "N/A";
            }

            // %example_name% -> 玩家名称。
            if (args === "name") {
                return player.getName();
            }

            // %example_uuid% -> 玩家 UUID。
            if (args === "uuid") {
                return player.getUniqueID();
            }

            // 未知参数。
            return "N/A";
        })
        // 注册变量。
        .register();
}
```

## 常见问题

### 1. 能否在脚本中使用 ES6+ 特性？

Nashorn 仅支持 ECMAScript 5.1，不支持 ES6+ 特性。

❌ 不支持：

- `let`
- `const`
- `() =>`
- `Promise`
- `async/await`
- `${var}`

✅ 支持：

- `var`
- `function`
- 传统数组和对象

### 2. 能否在脚本中调用其他插件的 API？

直接调用对应插件的包名即可。

``` javascript
var PlaceholderAPI = Packages.me.clip.placeholderapi.PlaceholderAPI;
```