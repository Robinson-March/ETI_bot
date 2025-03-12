import { bot } from "../bot";

const servicesMessage =
  'Contact Us by clicking: <a href="http://T.me/Elitestraderadmin">here</a>';

bot.command("contact_us", (ctx) =>
  ctx.reply(servicesMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("contact_us", (ctx) =>
  ctx.reply(servicesMessage, { parse_mode: "HTML" })
);
