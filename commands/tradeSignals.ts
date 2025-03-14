import { bot } from "../bot";
import { paymentKeyboard, tradeSignalsKeyboard } from "../utils/keyboards";

const tradeSignalsMessage = `Please select your subscription plan:`;

const lifetimeMessage = `
Your Benefits:

-Lifetime Membership 
-Telegram Support group.
-Advanced Fundamental Analysis(Centre Bank/Monetary policy,Interest rates, Inflation data analysis, Employment and Unemployment data analysis, Geo political Events).
-Advanced Technical Analysis(Full access to my strategy,Daily Mapping Reasons for entry and reason for exit).
-Access to my full course (PDF)
-Past and Future webinars 
-24hrs access to online Training 
-Access to all recorded Content

Price: $999 USD 
Billing period: lifetime
`;
const yearlyMessage = `
Your benefits :

-1 year access to signal channel.
-5-7 premium signals daily 
-Technical Analysis Class.
-Fundamental Analysis.
-Psychology and mindset development.

Price:$199 USD 
Billing period: 1 year 
Billing mode: recurring
`;
bot.command("trade_signals", (ctx) =>
  ctx.reply(tradeSignalsMessage, {
    parse_mode: "HTML",
    reply_markup: tradeSignalsKeyboard,
  })
);

bot.callbackQuery("trade_signals", (ctx) =>
  ctx.reply(tradeSignalsMessage, {
    parse_mode: "HTML",
    reply_markup: tradeSignalsKeyboard,
  })
);
bot.callbackQuery("subscribe_yearly", (ctx) =>
  ctx.reply(yearlyMessage, {
    parse_mode: "HTML",
    reply_markup: paymentKeyboard,
  })
);
bot.callbackQuery("subscribe_lifetime", (ctx) =>
  ctx.reply(lifetimeMessage, {
    parse_mode: "HTML",
    reply_markup: paymentKeyboard,
  })
);
