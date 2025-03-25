import { bot } from "../bot";
import { optionsKeyboard, startKeyboard } from "../utils/keyboards";

bot.command("start", (ctx) =>
  ctx.reply(
    `Welcome to Elite Trading Institution!
    
    I am your friendly neighbourhood payment bot, you can explore our services below.

If you need assistance please <a href="http://t.me/Elitestraderadmin">message/reply here</a> and my team will be happy to direct you.`,
    { parse_mode: "HTML", reply_markup: optionsKeyboard }
  )
);
