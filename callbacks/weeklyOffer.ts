import { bot } from "../bot";
import { paymentKeyboard, weekOfferKeyboard } from "../utils/keyboards";

const weeklyOfferInfo = `
Chose a weekly offer 
`;

const twoThoInfo = `
WEEKLY ACCOUNT MANAGEMENT OFFER. 

Your benefits.

-Free access to our yearly VIP channel(ELITE TRADERS CLUB) to monitor your trade progress.


-7% referral bonus commission on each active member reffered.


-Percentage Split 70%:30%(Depositor will get 70%, we will get 30% after trade)


-5% refferal bonus on downlines continuous reinvestment.


Price: $2000 USD 
Return amount: $10,000 USD 
Return duration: One week (5 trading days).

Required details to participate:
-Full Name:
-Email address:
-Receiving USDT/etherum address.
`;

const fiveThoInfo = `
WEEKLY ACCOUNT MANAGEMENT OFFER. 

Your benefits:

-Free access to our yearly VIP channel(ELITE TRADERS CLUB) to monitor your trade progress.


-7% referral bonus commission on each active member reffered.


-Percentage Split 70%:30%(Depositor will get 70%, we will get 30% after trade)


-5% refferal bonus on downlines continuous reinvestment.


Price: $5000 USD 
Return amount: $25,000 USD 
Return duration: One week (5 trading days)


Required details to participate:
Full Name:
Email address:
Receiving USDT/etherum address.
`;

const tenThoInfo = `
WEEKLY ACCOUNT MANAGEMENT OFFER. 

Your benefits:

-Free access to our yearly VIP channel(ELITE TRADERS CLUB) to monitor your trade progress.


-7% referral bonus commission on each active member reffered.


-Percentage Split 70%:30%(Depositor will get 70%, we will get 30% after trade)


-5% refferal bonus on downlines continuous reinvestment.


Price: $10,000 USD 
Return amount: $50,000 USD 
Return duration: One week (5 trading days)


Required details to participate:
Full Name:
Email address:
Receiving USDT/etherum address.
`;

bot.callbackQuery("weekly_offer", (ctx) =>
  ctx.reply(weeklyOfferInfo, {
    parse_mode: "HTML",
    reply_markup: weekOfferKeyboard,
  })
);
bot.callbackQuery("2000", (ctx) =>
  ctx.reply(twoThoInfo, {
    parse_mode: "HTML",
    reply_markup: paymentKeyboard,
  })
);
bot.callbackQuery("5000", (ctx) =>
  ctx.reply(fiveThoInfo, {
    parse_mode: "HTML",
    reply_markup: paymentKeyboard,
  })
);
bot.callbackQuery("10000", (ctx) =>
  ctx.reply(tenThoInfo, {
    parse_mode: "HTML",
    reply_markup: paymentKeyboard,
  })
);
