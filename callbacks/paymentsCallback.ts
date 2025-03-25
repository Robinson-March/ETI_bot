import { bot } from "../bot";
import { InlineKeyboard } from "grammy";

// Function to format payment information
const paymentInfo = (address: string) =>
  address
    ? `<b>Payment Address:</b>\n<code>${address}</code>`
    : "No payment address available.";

// Define payment addresses
const callbacks = {
  usdt_trc20: paymentInfo("TW2opq7dNFLQgf3MacnbSgezpFfinB8tm3"),
  usdt_erc20: paymentInfo("0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02"),
  usdt_bep20: paymentInfo("0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02"),
  eth: paymentInfo("0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02"),
  btc: paymentInfo("bc1qz0ltmf0m627fzqynahtxtmdvv8yrkeh620l3lh"),
  usdc_erc20: paymentInfo("0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02"), // No address provided
  usdc_trc20: paymentInfo(""), // No address provided
  ltc: paymentInfo("ltc1q69p9chl4x39ttmka8n90vaparwq7xxwrn6h0rr"),
  doge: paymentInfo("DPnKhsKzzm2p18e5kDMRUx4FGt1BYcRJji"),
  busd_bep20: paymentInfo("0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02"),
  busd_erc20: paymentInfo("0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02"),
  access_code: paymentInfo(""), // No address provided
};

// Attach callback queries to the bot
Object.entries(callbacks).forEach(([key, info]) => {
  bot.callbackQuery(key, async (ctx) => {
    await ctx.reply(info, { parse_mode: "HTML" });
  });
});
