'use strict';

require('dotenv').config();

const { App } = require('@slack/bolt');
// console.log(process.env);

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000
});

/* Add functionality here */

// 返事をしてくれる例
// app.message('hello', async ({ message, say }) => {
//   // say() sends a message to the channel where the event was triggered
//   await say(`Hey there <@${message.user}>!`);
// });

// トリガー（キーワードを含む場合、そのメッセージを転送する）
const triggerWords = new RegExp('hello|hi|hey|how are you|good morning', 'i');

app.message(triggerWords, async ({ message, client }) => {
  // client.chat.postMessageを使用して特定のチャンネルにメッセージを送信
  await client.chat.postMessage({
    channel: '', // 送信先のチャンネルID
    text: message // ここでreplaceしたい
  });
});

(async () => {
  // Start the app
  await app.start();
  console.log('⚡️ Bolt app is running!');
})();