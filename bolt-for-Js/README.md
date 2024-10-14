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

## Reference
- [WinSer](https://github.com/jfromaniello/winser)