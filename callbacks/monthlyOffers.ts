import { bot } from "../bot";
import {
  monthlyOfferKeyboard,
  paymentKeyboard,
  weekOfferKeyboard,
} from "../utils/keyboards";

const monthlyOfferInfo = `
Chose a monthly offer 
`;

const twoThoInfo = `
<b>MONTHLY ACCOUNT MANAGEMENT OFFER.</b> 

Your benefits.

-Free access to our Lifetime VIP channel(ELITE TRADERS CLUB) to monitor your trade progress.

-Free access to our Lifetime Mentorship


-15% referral bonus commission on each active member reffered.


-Percentage Split 70%:30%(Depositor will get 70%, we will get 30% after trade)


-10% refferal bonus on downlines continuous reinvestment.


Price: $50,000 USD 
Return amount: $350,000 USD 
Return duration: One month (20 trading days).

Required details to participate:
-Full Name:
-Email address:
-Receiving USDT/etherum address.
`;

const fiveThoInfo = `
<b>MONTHLY ACCOUNT MANAGEMENT OFFER.</b> 

Your benefits.

-Free access to our Lifetime VIP channel(ELITE TRADERS CLUB) to monitor your trade progress.


-Free access to our Lifetime Mentorship


-15% referral bonus commission on each active member reffered.


-Percentage Split 70%:30%(Depositor will get 70%, we will get 30% after trade)


-10% refferal bonus on downlines continuous reinvestment.


Price: $100,000 USD 
Return amount: $700,000 USD 
Return duration: One month (20 trading days).

Required details to participate:
-Full Name:
-Email address:
-Receiving USDT/etherum address.
`;

const tenThoInfo = `
<b>MONTHLY ACCOUNT MANAGEMENT OFFER.</b> 

Your benefits.

-Free access to our Lifetime VIP channel(ELITE TRADERS CLUB) to monitor your trade progress.

-Free access to our Lifetime Mentorship 


-15% referral bonus commission on each active member reffered.


-Percentage Split 70%:30%(Depositor will get 70%, we will get 30% after trade)


-10% refferal bonus on downlines continuous reinvestment.


Price: $500,000 USD 
Return amount: $3,500,000 USD 
Return duration: One month (20 trading days).

Required details to participate:
-Full Name:
-Email address:
-Receiving USDT/etherum address.
`;

bot.callbackQuery("monthly_offer", (ctx) =>
  ctx.reply(monthlyOfferInfo, {
    parse_mode: "HTML",
    reply_markup: monthlyOfferKeyboard,
  })
);
bot.callbackQuery("50000", (ctx) =>
  ctx.reply(twoThoInfo, {
    parse_mode: "HTML",
    reply_markup: paymentKeyboard,
  })
);
bot.callbackQuery("100000", (ctx) =>
  ctx.reply(fiveThoInfo, {
    parse_mode: "HTML",
    reply_markup: paymentKeyboard,
  })
);
bot.callbackQuery("500000", (ctx) =>
  ctx.reply(tenThoInfo, {
    parse_mode: "HTML",
    reply_markup: paymentKeyboard,
  })
);
