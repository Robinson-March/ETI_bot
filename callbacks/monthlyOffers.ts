import { bot } from "../bot";
import {
  monthlyofferKeyboard,
  monthlyOfferKeyboard,
  paymentKeyboard,
} from "../utils/keyboards";

const monthlyOfferInfo = `Chose a monthly offer`;

const generateOfferInfo = (price: number, returnAmount: number) => `
<b>MONTHLY ACCOUNT MANAGEMENT OFFER.</b> 

Your benefits:

- Free access to our Lifetime VIP channel (ELITE TRADERS CLUB) to monitor your trade progress.
- Free access to our Lifetime Mentorship.
- 15% referral bonus commission on each active member referred.
- Percentage Split 70%:30% (Depositor will get 70%, we will get 30% after trade).
- 10% referral bonus on downlines' continuous reinvestment.

Price: $${price.toLocaleString()} USD  
Return amount: $${returnAmount.toLocaleString()} USD  
Return duration: One month (20 trading days).

Required details to participate:
- Full Name:
- Email address:
- Receiving USDT/Ethereum address.
`;

const monthlyAutomaticMessage = `
Proceed to our <a href="https://elitetradinginstitution.com/">official website</a> 

-Create an account
-Log into your account dashboard 
-Click on connect wallet and connect your wallet to your account.
 -Click on account management 
-Buy a Plan .
-Choose your best Monthly offer 
-And click on JOIN PLAN to apply for your account managemen
`;
const offers = {
  "50000": generateOfferInfo(50000, 350000),
  "100000": generateOfferInfo(100000, 700000),
  "500000": generateOfferInfo(500000, 3500000),
};

bot.callbackQuery("automatic_monthly_deposit", (ctx) =>
  ctx.reply(monthlyAutomaticMessage, {
    parse_mode: "HTML",
  })
);
bot.callbackQuery("manual_monthly_deposit", (ctx) =>
  ctx.reply(monthlyOfferInfo, {
    parse_mode: "HTML",
    reply_markup: monthlyOfferKeyboard,
  })
);

bot.callbackQuery("monthly_offer", (ctx) =>
  ctx.reply("Select your payment form", {
    parse_mode: "HTML",
    reply_markup: monthlyofferKeyboard,
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
