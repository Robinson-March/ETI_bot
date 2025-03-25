import { bot } from "../bot";
import {
  lifetimeSignalKeyboard,
  paymentKeyboard,
  tradeSignalsKeyboard,
  yearlySignalKeyboard,
} from "../utils/keyboards";

const tradeSignalsMessage = `Please select your subscription plan:`;

const lifetimeMessage = `
<b>Your Benefits:</b>

- Lifetime Membership 
- Telegram Support group.
- Advanced Fundamental Analysis (Central Bank/Monetary policy, Interest rates, Inflation data analysis, Employment and Unemployment data analysis, Geo-political Events).
- Advanced Technical Analysis (Full access to my strategy, Daily Mapping Reasons for entry and reason for exit).
- Access to my full course (PDF)
- Past and Future webinars 
- 24hrs access to online Training 
- Access to all recorded Content

<b>Price:</b> $999 USD  
<b>Billing period:</b> Lifetime
`;

const yearlyMessage = `
<b>Your benefits:</b>

- 1 year access to signal channel.
- 5-7 premium signals daily.
- Technical Analysis Class.
- Fundamental Analysis.
- Psychology and mindset development.

<b>Price:</b> $199 USD  
<b>Billing period:</b> 1 year  
<b>Billing mode:</b> Recurring
`;

const automaticYearlyDeposit = `
<b>Proceed to our official website:</b> <a href="https://elitetradinginstitution.com/">Elite Trading Institution</a>

- Create an account.
- Log into your account dashboard.
- Click on "Connect Wallet" and connect your wallet to your account.
- Click on "Purchase Signals".
- Select "YEARLY VIP OFFER".
- Click on the "Subscribe" button to complete your purchase.
`;

const automaticLifetimeDeposit = `
<b>Proceed to our official website:</b> <a href="https://elitetradinginstitution.com/">Elite Trading Institution</a>

- Create an account.
- Log into your account dashboard.
- Click on "Connect Wallet" and connect your wallet to your account.
- Click on "Purchase Signals".
- Select "LIFETIME VIP OFFER".
- Click on the "Subscribe" button to complete your purchase.
`;

// Trade Signals Command
bot.command("trade_signals", (ctx) =>
  ctx.reply(tradeSignalsMessage, {
    parse_mode: "HTML",
    reply_markup: tradeSignalsKeyboard,
  })
);

// Trade Signals Callback
bot.callbackQuery("trade_signals", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(tradeSignalsMessage, {
    parse_mode: "HTML",
    reply_markup: tradeSignalsKeyboard,
  });
});

// Yearly Subscription Callback
bot.callbackQuery("subscribe_yearly", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("Select your payment form", {
    parse_mode: "HTML",
    reply_markup: yearlySignalKeyboard,
  });
});

// Manual Deposit Callback
bot.callbackQuery("manual_yearly_deposit", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(yearlyMessage, {
    parse_mode: "HTML",
    reply_markup: paymentKeyboard,
  });
});
bot.callbackQuery("manual_lifetime_deposit", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(lifetimeMessage, {
    parse_mode: "HTML",
    reply_markup: paymentKeyboard,
  });
});

// Automatic Yearly Deposit Callback
bot.callbackQuery("automatic_yearly_deposit", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(automaticYearlyDeposit, {
    parse_mode: "HTML",
  });
});

// Automatic Lifetime Deposit Callback
bot.callbackQuery("automatic_lifetime_deposit", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(automaticLifetimeDeposit, {
    parse_mode: "HTML",
  });
});

// Lifetime Subscription Callback
bot.callbackQuery("subscribe_lifetime", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("Select your payment form", {
    parse_mode: "HTML",
    reply_markup: lifetimeSignalKeyboard,
  });
});
