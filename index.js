const TelegramBot = require('node-telegram-bot-api');

const token = '6294915141:AAFmbmw2KulPy-qd3MOjTLtYu4u8fK8k9OM';
const webAppUrl = 'https://luminous-quokka-ea18d1.netlify.app';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text == '/start') {
    await bot.sendMessage(chatId, '💱 Добро пожаловать в виртуальный обменник! 💵', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'ОБМЕНЯТЬ 💸', web_app: {url: webAppUrl}}]
            ]
        }
    });
  }  
});