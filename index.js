import quotesMap from "./random.js";
import TelegramBot from "node-telegram-bot-api";
import { keyboardCategory, keyboardNumber } from "./keyboard.js";

const token = "2119812922:AAGyAVoGEzPnnWIMdZ4zLuBAHUatcPPPNqs";

const bot = new TelegramBot(token, { polling: true });

let numberQuotes = 0;
let category = "";

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Hello! Write me the required number of quotes and I will send them instantly)",
    {
      reply_markup: {
        inline_keyboard: keyboardNumber,
      },
    }
  );
});

const sendQuotes = (chatId) => {
  quotesMap(numberQuotes, category).map((quote) => {
    bot.sendMessage(chatId, quote);
  });
  bot.sendMessage(
    chatId,
    "Write me the required number of quotes and I will send them instantly)",
    {
      reply_markup: {
        inline_keyboard: keyboardNumber,
      },
    }
  );
};

bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  console.log(query.data);
  switch (query.data) {
    case "one": {
      numberQuotes = 1;
    }
    case "two": {
      numberQuotes = 2;
    }
    case "three": {
      numberQuotes = 3;
    }
    case "four": {
      numberQuotes = 4;
    }
    case "five": {
      numberQuotes = 5;
    }
    case "moreMotivation": {
      category = "motivation";
    }
    case "moreSuccess": {
      category = "motivation";
    }
  }

  // sendQuotes(chatId);
});
