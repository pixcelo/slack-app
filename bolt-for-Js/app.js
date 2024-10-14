'use strict';

require('dotenv').config();

const { App } = require('@slack/bolt');

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000
});

// 返事をしてくれる例
// app.message('hello', async ({ message, say }) => {
//   // say() sends a message to the channel where the event was triggered
//   await say(`Hey there <@${message.user}>!`);
// });

// トリガー（キーワードを含む場合、そのメッセージを転送する）
// const triggerWords = 'opened';
// const triggerWords = new RegExp('aaa|bbb|ccc', 'i');

// const replaceMap = {
//   'aaa': '',
//   'bbb': '',
// };

// function replaceText(text) {
//   return text.replace(/\w+/g, word => replaceMap[word] || word);
// }

// SlackのGitHub Appのメッセージを読み取って、同じチームのプルリクならチームチャンネルに転送する
app.event('message', async ({ event, client }) => {  
  if (event.bot_id == '') return;

  try {
    const text = event.attachments[0]?.text || '';
    const title = event.attachments[0]?.title || '';

    const reviewerText = event.attachments[0]?.fields[0]?.value || '';
    let reviewer = "";

    // レビュワーのSlackIDを指定
    if (reviewerText.includes('')) {
      reviewer += '<@> ';
    }
    if (reviewerText.includes('')) {
      reviewer += '<@> ';
    }
    if (reviewerText.includes('')) {
      reviewer += '<@> ';
    }

    // メッセージの作成
    const sendMessage = `${(reviewer)} \n ${title} \n ${text}`;

    // レビュワーに同じチームのメンバーがいるかどうか
    if (reviewerText.includes('') || reviewerText.includes('')) {
      await client.chat.postMessage({
        channel: '', // 送信先のチャンネルID
        // channel: event.channel, // 同じチャンネルに送信
        text: sendMessage,
        
      });
    } else {
      console.log('レビュワーにメンバーがいませんでした。');
    }
  } catch (error) {
    console.error(error);
  }  
});

// app.message('opened', async ({ message, client, logger }) => {  
//   try {
//     await client.chat.postMessage({
//       channel: '', //message.channel, // 送信先のチャンネルID
//       text: message.text // ここでメンションの名前を Replaceしたい
//     });
//   } catch (error) {
//     logger.error(error);
//   }  
// });

(async () => {
  // Start the app
  await app.start();
  console.log('⚡️ Bolt app is running!');
})();