import { bot } from "../bot";
import { tradeSignalsKeyboard } from "../utils/keyboards";

const tradeSignalsMessage = `Please select your subscription plan:`;

bot.command("trade_signals", (ctx) =>
  ctx.reply(tradeSignalsMessage, {
    parse_mode: "HTML",
    reply_markup: tradeSignalsKeyboard,
  })
);

bot.callbackQuery("trade_signals", (ctx) =>
  ctx.reply(tradeSignalsMessage, {
    parse_mode: "HTML",
    reply_markup: tradeSignalsKeyboard,
  })
);
