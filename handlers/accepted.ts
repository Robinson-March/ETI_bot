import { bot } from "../bot";
import { optionsKeyboard } from "../utils/keyboards";

bot.callbackQuery("accepted", async (ctx) => {
  await ctx.answerCallbackQuery();

  await ctx.reply(
    `Welcome to Elite Trading Institution!
    
    I am your friendly neighbourhood payment bot, you can explore our services below.

If you need assistance please <a href="http://t.me/Elitestraderadmin">message/reply here</a> and my team will be happy to direct you.`,
    { parse_mode: "HTML", reply_markup: optionsKeyboard }
  );
});
bot.callbackQuery("copy_trade", async (ctx) => {
  await ctx.reply(
    `
    Proceed to our <a href="https://elitetradinginstitution.com/">official website</a>  

-Create an account
-Log into your account dashboard 
-Click on connect wallet and connect your wallet to your account.
 -Click on copy expert 
-choose your plan and click on copy expert to join.
    `,
    { parse_mode: "HTML" }
  );
});
