import { bot } from "../bot";
import {
  paymentKeyboard,
  weeklyofferKeyboard,
  weekOfferKeyboard,
} from "../utils/keyboards";

const weeklyOfferInfo = `Chose a weekly offer`;

const generateOfferInfo = (price: number, returnAmount: number) => `
<b>WEEKLY ACCOUNT MANAGEMENT OFFER.</b> 

Your benefits:

- Free access to our yearly VIP channel (ELITE TRADERS CLUB) to monitor your trade progress.
- 7% referral bonus commission on each active member referred.
- Percentage Split 70%:30% (Depositor will get 70%, we will get 30% after trade).
- 5% referral bonus on downlines' continuous reinvestment.

Price: $${price} USD  
Return amount: $${returnAmount} USD  
Return duration: One week (5 trading days).

Required details to participate:
- Full Name:
- Email address:
- Receiving USDT/Ethereum address.
`;
const weeklyAutomaticMessage = `
Proceed to our <a href="https://elitetradinginstitution.com/">official website</a> 

-Create an account
-Log into your account dashboard 
-Click on connect wallet and connect your wallet to your account.
 -Click on account management 
-Buy a Plan .
-Choose your best weekly offer 
-And click on JOIN PLAN to apply for your account management.
`;
const offers = {
  "2000": generateOfferInfo(2000, 10000),
  "5000": generateOfferInfo(5000, 25000),
  "10000": generateOfferInfo(10000, 50000),
};

bot.callbackQuery("automatic_weekly_deposit", (ctx) =>
  ctx.reply(weeklyAutomaticMessage, {
    parse_mode: "HTML",
  })
);
bot.callbackQuery("manual_weekly_deposit", (ctx) =>
  ctx.reply(weeklyOfferInfo, {
    parse_mode: "HTML",
    reply_markup: weekOfferKeyboard,
  })
);
bot.callbackQuery("weekly_offer", (ctx) =>
  ctx.reply("Select your payment form", {
    parse_mode: "HTML",
    reply_markup: weeklyofferKeyboard,
  })
);

Object.entries(offers).forEach(([key, info]) => {
  bot.callbackQuery(key, (ctx) =>
    ctx.reply(info, {
      parse_mode: "HTML",
      reply_markup: paymentKeyboard,
    })
  );
});
