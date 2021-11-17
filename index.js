// import quotesMap from './random.js'
import TelegramBot from 'node-telegram-bot-api'
import { keyboard } from './keyboard.js'

const token = '2119812922:AAGyAVoGEzPnnWIMdZ4zLuBAHUatcPPPNqs'

const bot = new TelegramBot(token, {polling: true})

  bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Hello! What quotes do you need?', {
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
})

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;

  let category = '';

  if (query.data === 'moreMotivation') {
    category = 'motivation';

  }

  if (query.data === 'moreSuccess') {
    category = 'success';
  }

  if (true) {
    bot.sendMessage(chatId, 'app', {
      reply_markup: {
          inline_keyboard: keyboard
      }
  });
  }
});
