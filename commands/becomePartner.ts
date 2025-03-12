import { bot } from "../bot";

const becomePartnerMessage = `
Join us as a partner and earn commissions. 
Learn more here: <a href="https://google.com">Partnership Program</a>
`;

bot.command("become_partner", (ctx) =>
  ctx.reply(becomePartnerMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("become_partner", (ctx) =>
  ctx.reply(becomePartnerMessage, { parse_mode: "HTML" })
);
