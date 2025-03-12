import { bot } from "../bot";

const publicGroupMessage =
  'Join our public group here: <a href="https://t.me/Elitetrading_institution">Telegram Group</a>';

bot.command("public_group", (ctx) =>
  ctx.reply(publicGroupMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("public_group", (ctx) =>
  ctx.reply(publicGroupMessage, { parse_mode: "HTML" })
);
