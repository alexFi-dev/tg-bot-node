const TelegramBot = require('node-telegram-bot-api');

const token = '6294915141:AAFmbmw2KulPy-qd3MOjTLtYu4u8fK8k9OM';
const webAppUrlOne = 'https://luminous-quokka-ea18d1.netlify.app/';
const webAppUrlTwo = 'https://chimerical-stroopwafel-0fd3e2.netlify.app/';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text == '/start') {
    await bot.sendMessage(chatId, '💱 Добро пожаловать в виртуальный обменник! 💵  Настоящая версия: MVP v.0.5 (beta 0.1). Доступен архив:', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'prototype 💸', web_app: {url: webAppUrlOne}}, {text: 'alpha v.0.1 💰', web_app: {url: webAppUrlTwo}}]
            ]
        }
    });
  }  

  const Hi = "hi";
  const hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.from.id, "Hello  " + msg.from.first_name);
  }
  if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
  }
  const bye = "bye";
  if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Have a nice day " + msg.from.first_name + " Buy");
  }
  const robot = "I'm robot";
  if (msg.text.indexOf(robot) === 0) {
      bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
  }
});

bot.onText(/\/sendpic/, async (msg) => {
  bot.sendPhoto(msg.chat.id,"https://w0.peakpx.com/wallpaper/148/2/HD-wallpaper-business-money-transfer-euro-bundle-of-money-payment-businessmen.jpg",{caption : "Находим варианты! \nПомогаем клиентам "} );
  bot.sendMessage(msg.chat.id, "MVP v.0.5", {
    "reply_markup": {
        "keyboard": [["Prototype", "Alpha v.0.1"],   ["Beta v.0.1"]]
        }
    });
});