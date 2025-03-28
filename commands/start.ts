import { bot } from "../bot";
import { optionsKeyboard, startKeyboard } from "../utils/keyboards";

bot.command("start", (ctx) =>
  ctx.reply(
    `
    Welcome to <a href="https://elitetradinginstitution.com/">Elite Training Institution</a>.

I am your friendly neighbourhood payment bot, you can explore our services below.


    If you need assistance please click on contact us button and my team will be happy to direct you`,
    { parse_mode: "HTML", reply_markup: optionsKeyboard }
  )
);
