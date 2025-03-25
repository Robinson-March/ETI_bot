import { bot } from "../bot";
import { paymentKeyboard } from "../utils/keyboards";

const mentorshipMessage = `
Proceed to our <a href="https://elitetradinginstitution.com/">official website</a> 

-Create an account
-Log into your account dashboard 
-Click on connect wallet and connect your wallet to your account.
-Click on purchase signals 
-MENTORSHIP OFFER
-And click on subscribe button to complete your purchase`;

bot.command("mentorship_course", (ctx) =>
  ctx.reply(mentorshipMessage, {
    parse_mode: "HTML",
    // reply_markup: paymentKeyboard,
  })
);

bot.callbackQuery("mentorship_course", (ctx) =>
  ctx.reply(mentorshipMessage, {
    parse_mode: "HTML",
    // reply_markup: paymentKeyboard,
  })
);
