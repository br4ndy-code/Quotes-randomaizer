import quotesMap from "./random.js";
import TelegramBot from "node-telegram-bot-api";
import { keyboard } from "./keyboard.js";

const token = "2119812922:AAGyAVoGEzPnnWIMdZ4zLuBAHUatcPPPNqs";

const bot = new TelegramBot(token, { polling: true });

let numberQuotes = 0;
let category = "";

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (Number(msg.text) > 10) {
    bot.sendMessage(chatId, "Maximum number of citations 10! :)");
  } else if (Number(msg.text) <= 10) {
    numberQuotes = msg.text;
    bot.sendMessage(chatId, "What quotes do you need?", {
      reply_markup: {
        inline_keyboard: keyboard,
      },
    });
  } else {
    bot.sendMessage(
      chatId,
      "Hello! Write me the required number of quotes and I will send them instantly)"
    );
  }
});

bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;

  if (query.data === "moreMotivation") {
    category = "motivation";
  }

  if (query.data === "moreSuccess") {
    category = "success";
  }

  if (true) {
    bot.sendMessage(chatId, `${quotesMap(numberQuotes, category)}`, {
      reply_markup: {
        inline_keyboard: keyboard,
      },
    });
  }
});
