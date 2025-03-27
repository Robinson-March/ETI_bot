import { InlineKeyboard } from "grammy";
import { bot } from "../../bot";

// Function to generate the lifetime subscription message
const lifetimeMessage = (
  cryptoAmount: string,
  coin: string,
  address: string
) => `
<b>Your Benefits:</b>

- Lifetime Membership
- Telegram Support group.
- Advanced Fundamental Analysis (Central Bank/Monetary policy, Interest rates, Inflation data analysis, Employment and Unemployment data analysis, Geo-political Events).
- Advanced Technical Analysis (Full access to my strategy, Daily Mapping Reasons for entry and reason for exit).
- Access to my full course (PDF)
- Past and Future webinars
- 24hrs access to online Training
- Access to all recorded Content

<b>Price:</b> $999 USD ≈ ${cryptoAmount} ${coin}
<b>Billing period:</b> Lifetime

<b>${coin} Payment Address:</b>
<code>${address || "No payment address available"}</code>
`;

// Function to fetch crypto price from CoinGecko
const getCryptoPrice = async (
  coinId: string,
  symbol: string,
  address: string
) => {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data[coinId] || !data[coinId].usd) {
      throw new Error("Price data unavailable.");
    }

    const usdRate = data[coinId].usd;
    const cryptoAmount = (999 / usdRate).toFixed(6); // Convert $999 to crypto

    return lifetimeMessage(cryptoAmount, symbol, address);
  } catch (error) {
    console.error(`Error fetching ${symbol} price:`, error);
    return `<b>${symbol} Payment Address:</b>\n<code>${address}</code>\n\n⚠️ Unable to fetch live price.`;
  }
};

// Define supported payment methods with CoinGecko IDs
const paymentOptions: Record<
  string,
  { id: string; symbol: string; address: string }
> = {
  pay_usdt_trc20: {
    id: "tether",
    symbol: "USDT (TRC20)",
    address: "TW2opq7dNFLQgf3MacnbSgezpFfinB8tm3",
  },
  pay_usdt_erc20: {
    id: "tether",
    symbol: "USDT (ERC20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  pay_btc: {
    id: "bitcoin",
    symbol: "BTC",
    address: "bc1qz0ltmf0m627fzqynahtxtmdvv8yrkeh620l3lh",
  },
  pay_eth: {
    id: "ethereum",
    symbol: "ETH",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  pay_ltc: {
    id: "litecoin",
    symbol: "LTC",
    address: "ltc1q69p9chl4x39ttmka8n90vaparwq7xxwrn6h0rr",
  },
  pay_doge: {
    id: "dogecoin",
    symbol: "DOGE",
    address: "DPnKhsKzzm2p18e5kDMRUx4FGt1BYcRJji",
  },
  pay_busd_bep20: {
    id: "binance-usd",
    symbol: "BUSD (BEP20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  pay_busd_erc20: {
    id: "binance-usd",
    symbol: "BUSD (ERC20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  pay_usdc_erc20: {
    id: "usd-coin",
    symbol: "USDC (ERC20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  pay_usdc_trc20: {
    id: "usd-coin",
    symbol: "USDC (TRC20)",
    address: "TW2opq7dNFLQgf3MacnbSgezpFfinB8tm3",
  },
};

// Function to generate the inline keyboard dynamically
const generateKeyboard = () => {
  const offerKey = "pay"; // Fixed missing variable
  const keyboard = new InlineKeyboard()
    .text("⚡ USDT (Tether USD (Tron/TRC20))", `${offerKey}_usdt_trc20`)
    .row()
    .text("⚡ USDT (Tether USD (Ethereum/ERC20))", `${offerKey}_usdt_erc20`)
    .row()
    .text("⚡ USDT (Tether USD (BEP20))", `${offerKey}_busd_bep20`)
    .row()
    .text("⚡ ETH (Ether)", `${offerKey}_eth`)
    .row()
    .text("⚡ BTC (Bitcoin)", `${offerKey}_btc`)
    .row()
    .text("⚡ USDC (USD Coin (ERC20))", `${offerKey}_usdc_erc20`)
    .row()
    .text("⚡ USDC (USD Coin (TRC20))", `${offerKey}_usdc_trc20`)
    .row()
    .text("⚡ LTC (Litecoin)", `${offerKey}_ltc`)
    .row()
    .text("⚡ DOGE (Dogecoin)", `${offerKey}_doge`)
    .row()
    .text("⚡ BUSD (Binance USD (BEP20))", `${offerKey}_busd_bep20`)
    .row()
    .text("⚡ BUSD (Binance USD (ERC20))", `${offerKey}_busd_erc20`)
    .row()
    .text("🔑 Access Code", `${offerKey}_access_code`)
    .row()
    .text("« Back", "back")
    .row();

  return keyboard;
};

// Handle payment method selection via callback queries
Object.entries(paymentOptions).forEach(([key, { id, symbol, address }]) => {
  bot.callbackQuery(key, async (ctx) => {
    const message = await getCryptoPrice(id, symbol, address);
    await ctx.editMessageText(message, { parse_mode: "HTML" });
  });
});

// Command to start subscription and show the payment options
bot.command("lifetime", async (ctx) => {
  await ctx.reply("<b>Select a payment method:</b>", {
    parse_mode: "HTML",
    reply_markup: generateKeyboard(),
  });
});
