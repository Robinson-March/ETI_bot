import { bot } from "../bot";
import { optionsKeyboard, startKeyboard } from "../utils/keyboards";

bot.command("start", (ctx) =>
  ctx.reply(
    `If you need assistance please click on contact us button and my team will be happy to direct you`,
    { parse_mode: "HTML", reply_markup: optionsKeyboard }
  )
);
