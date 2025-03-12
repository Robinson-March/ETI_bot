import { bot } from "../bot";

bot.command("moreinfo", (ctx) =>
  ctx.reply(
    'For more information, visit: <a href="https://google.com">Click Here</a>',
    { parse_mode: "HTML" }
  )
);
