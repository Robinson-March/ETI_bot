import { bot } from "../bot";

bot.command("moreinfo", (ctx) =>
  ctx.reply(
    'For more information, visit: <a href="https://elitetradinginstitution.com/">Click Here</a>',
    { parse_mode: "HTML" }
  )
);
