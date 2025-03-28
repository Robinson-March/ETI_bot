import { bot } from "../bot";
import { getCryptoPrice, paymentOptions } from "../utils/crypto";
import { InlineKeyboard } from "grammy";
import {
  lifetimeSignalKeyboard,
  tradeSignalsKeyboard,
  yearlySignalKeyboard,
} from "../utils/keyboards";

const tradeSignalsMessage = `Please select your subscription plan:`;

const automaticYearlyDeposit = `
<b>Proceed to our official website:</b> <a href="https://elitetradinginstitution.com/">Elite Trading Institution</a>

- Create an account.
- Log into your dashboard.
- Click "Connect Wallet" and connect your wallet.
- Click "Purchase Signals".
- Select "YEARLY VIP OFFER".
- Click "Subscribe" to complete your purchase.
`;

const automaticLifetimeDeposit = `
<b>Proceed to our official website:</b> <a href="https://elitetradinginstitution.com/">Elite Trading Institution</a>

- Create an account.
- Log into your dashboard.
- Click "Connect Wallet" and connect your wallet.
- Click "Purchase Signals".
- Select "LIFETIME VIP OFFER".
- Click "Subscribe" to complete your purchase.
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

// Subscription Callbacks
const handleSubscription = async (ctx: any, plan: "yearly" | "lifetime") => {
  await ctx.answerCallbackQuery();
  await ctx.reply("Select a cryptocurrency for payment:", {
    parse_mode: "HTML",
    reply_markup: cryptoKeyboard(plan),
  });
};

bot.callbackQuery("manual_yearly_deposit", async (ctx) =>
  handleSubscription(ctx, "yearly")
);

bot.callbackQuery("manual_lifetime_deposit", async (ctx) =>
  handleSubscription(ctx, "lifetime")
);

// Automatic Payment Callbacks
bot.callbackQuery("automatic_yearly_deposit", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(automaticYearlyDeposit, { parse_mode: "HTML" });
});

bot.callbackQuery("automatic_lifetime_deposit", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(automaticLifetimeDeposit, { parse_mode: "HTML" });
});

// Handle Crypto Selection & Show Payment Details
Object.entries(paymentOptions).forEach(([key, { id, symbol, address }]) => {
  bot.callbackQuery(`yearly_${key}`, async (ctx) => {
    const price = await getCryptoPrice(id, symbol, address, 199);
    await ctx.reply(price, { parse_mode: "HTML" });
  });

  bot.callbackQuery(`lifetime_${key}`, async (ctx) => {
    const price = await getCryptoPrice(id, symbol, address, 499);
    await ctx.reply(price, { parse_mode: "HTML" });
  });
});

// Function to generate Crypto Keyboard
const cryptoKeyboard = (prefix: "yearly" | "lifetime") => {
  return new InlineKeyboard()
    .text("⚡ USDT (Tether USD (Tron/TRC20))", `${prefix}_pay_usdt_trc20`)
    .row()
    .text("⚡ USDT (Tether USD (Ethereum/ERC20))", `${prefix}_pay_usdt_erc20`)
    .row()
    .text("⚡ BTC (Bitcoin)", `${prefix}_pay_btc`)
    .row()
    .text("⚡ ETH (Ether)", `${prefix}_pay_eth`)
    .row()
    .text("⚡ LTC (Litecoin)", `${prefix}_pay_ltc`)
    .row()
    .text("⚡ DOGE (Dogecoin)", `${prefix}_pay_doge`)
    .row()
    .text("⚡ BUSD (Binance USD (BEP20))", `${prefix}_pay_busd_bep20`)
    .row()
    .text("⚡ BUSD (Binance USD (ERC20))", `${prefix}_pay_busd_erc20`)
    .row()
    .text("⚡ USDC (USD Coin (ERC20))", `${prefix}_pay_usdc_erc20`)
    .row()
    .text("⚡ USDC (USD Coin (TRC20))", `${prefix}_pay_usdc_trc20`)
    .row()
    .text("🔑 Access Code", "access_code")
    .row()
    .text("« Back", "back");
};
// Lifetime Subscription Callback
bot.callbackQuery("subscribe_lifetime", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("Select your payment form", {
    parse_mode: "HTML",
    reply_markup: lifetimeSignalKeyboard,
  });
});
bot.callbackQuery("subscribe_yearly", (ctx) =>
  ctx.reply("Select your payment form", {
    parse_mode: "HTML",
    reply_markup: yearlySignalKeyboard,
  })
);