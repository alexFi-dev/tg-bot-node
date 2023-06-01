const TelegramBot = require('node-telegram-bot-api');

const token = '6294915141:AAFmbmw2KulPy-qd3MOjTLtYu4u8fK8k9OM';
const webAppUrl = 'https://luminous-quokka-ea18d1.netlify.app';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text == '/start') {
    await bot.sendMessage(chatId, 'Нажми меня 👇', {
        reply_markup: {
            keyboard: [
                [{text: 'Заполни меня буквами'}, {text: 'Заполни меня словами'}]
            ]
        }
    });

    await bot.sendMessage(chatId, 'Перейти на сайт', {
        reply_markup: {
            inline_keyboard: [
                [{text: '💁👌🎍😍', web_app: {url: webAppUrl}}]
            ]
        }
    });
  }  
});