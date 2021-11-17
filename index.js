import quotesMap from './random.js'
import TelegramBot from 'node-telegram-bot-api'

// const TelegramBot = require('node-telegram-bot-api');
const token = '2119812922:AAGyAVoGEzPnnWIMdZ4zLuBAHUatcPPPNqs'

const bot = new TelegramBot(token, {polling: true})

let numberQuotes = Math.ceil(Math.random() * 10)

if (!numberQuotes) {
  console.log('Are you dumb? Enter the number')
} else {
  quotesMap(numberQuotes)
  console.log(quotesMap(numberQuotes))
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, quotesMap(numberQuotes));
});