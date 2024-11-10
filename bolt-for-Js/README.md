.envファイルの構成

`SLACK_SIGNING_SECRET`は、slack api の Basic Information → App Credentials を参照

`SLACK_BOT_TOKEN`は、Install Appを参照

`SLACK_APP_TOKEN`は、Socket Modeを参照

```bash
SLACK_SIGNING_SECRET=""
SLACK_BOT_TOKEN=""
SLACK_APP_TOKEN=""
```

## サービス化
Windowsならwinser、Linuxならpm2
- winser
- pm2

## winser デプロイ
管理者の権限でコマンドプロンプトを起動<br />
Windowsのサービスとして登録・削除できる
```bash
# サービスのアンインストール
npm run uninstall-service

# サービスのインストール
npm run install-service
```

## pm2 デプロイ

デプロイコマンド
```
pm2 start app.js
```

```bash
PS C:\Users\xxx\source\repos\slack-app\bolt-for-Js> pm2 start .\app.js

                        -------------

__/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
 _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
  _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
   _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
    _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
     _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
      _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
       _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
        _\///______________\///______________\///__\///////////////__


                          Runtime Edition

        PM2 is a Production Process Manager for Node.js applications
                     with a built-in Load Balancer.

                Start and Daemonize any application:
                $ pm2 start app.js

                Load Balance 4 instances of api.js:
                $ pm2 start api.js -i 4

                Monitor in production:
                $ pm2 monitor

                Make pm2 auto-boot at server restart:
                $ pm2 startup

                To go further checkout:
                http://pm2.io/


                        -------------

[PM2] Spawning PM2 daemon with pm2_home=C:\Users\xxx\.pm2
[PM2] PM2 Successfully daemonized
[PM2] Starting C:\Users\xxx\source\repos\slack-app\bolt-for-Js\app.js in fork_mode (1 instance)
[PM2] Done.
┌────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ app    │ default     │ 1.0.0   │ fork    │ 53188    │ 0s     │ 0    │ online    │ 0%       │ 49.3mb   │ Tet… │ disabled │
└────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘ 
```

アプリの確認
```bash
pm2 list
┌────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ app    │ default     │ 1.0.0   │ fork    │ 53188    │ 6m     │ 0    │ online    │ 0%       │ 48.7mb   │ Tet… │ disabled │
└────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
```

ログの確認
```bash
pm2 logs
```

```bash
PM2        | 2024-11-10T14:42:26: PM2 log: PM2 version          : 5.4.2
PM2        | 2024-11-10T14:42:26: PM2 log: Node.js version      : 20.16.0
PM2        | 2024-11-10T14:42:26: PM2 log: Current arch         : x64
PM2        | 2024-11-10T14:42:26: PM2 log: PM2 home             : C:\Users\xxx\.pm2
PM2        | 2024-11-10T14:42:26: PM2 log: PM2 PID file         : C:\Users\xxx\.pm2\pm2.pid
PM2        | 2024-11-10T14:42:26: PM2 log: RPC socket file      : \\.\pipe\rpc.sock
PM2        | 2024-11-10T14:42:26: PM2 log: BUS socket file      : \\.\pipe\pub.sock
PM2        | 2024-11-10T14:42:26: PM2 log: Application log path : C:\Users\xxx\.pm2\logs
PM2        | 2024-11-10T14:42:26: PM2 log: Worker Interval      : 30000
PM2        | 2024-11-10T14:42:26: PM2 log: Process dump file    : C:\Users\xxx\.pm2\dump.pm2
PM2        | 2024-11-10T14:42:26: PM2 log: Concurrent actions   : 2
PM2        | 2024-11-10T14:42:26: PM2 log: SIGTERM timeout      : 1600
PM2        | 2024-11-10T14:42:26: PM2 log: ===============================================================================
PM2        | 2024-11-10T14:42:26: PM2 log: App [app:0] starting in -fork mode-
PM2        | 2024-11-10T14:42:26: PM2 log: App [app:0] online

C:\Users\xxx\.pm2\logs\app-error.log last 15 lines:
C:\Users\xxx\.pm2\logs\app-out.log last 15 lines:
0|app      | [INFO]  socket-mode:SocketModeClient:0 Going to establish a new connection to Slack ...
0|app      | ⚡️ Bolt app is running!
0|app      | [INFO]  socket-mode:SocketModeClient:0 Now connected to Slack
```


## Reference
- [WinSer](https://github.com/jfromaniello/winser)