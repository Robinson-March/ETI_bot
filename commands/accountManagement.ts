import { bot } from "../bot";
import { accountManagementKeyboard } from "../utils/keyboards";

const accountManagementInfo = `
ACCOUNT MANAGEMENT OFFER 
`;

bot.command("account_management", (ctx) =>
  ctx.reply(accountManagementInfo, {
    parse_mode: "HTML",
    reply_markup: accountManagementKeyboard,
  })
);

bot.callbackQuery("account_management", (ctx) =>
  ctx.reply(accountManagementInfo, {
    parse_mode: "HTML",
    reply_markup: accountManagementKeyboard,
  })
);
