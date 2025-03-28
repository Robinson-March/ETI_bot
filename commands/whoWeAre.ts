import { bot } from "../bot";

const whoWeAreMessage = `<a href="https://elitetradinginstitution.com/">Elite Training Institution</a> 🥇 VIP!\n\nWe are a professional trading group dedicated to helping traders succeed!`;

bot.command("who_we_are", (ctx) =>
  ctx.reply(whoWeAreMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("who_we_are", (ctx) =>
  ctx.reply(whoWeAreMessage, { parse_mode: "HTML" })
);
