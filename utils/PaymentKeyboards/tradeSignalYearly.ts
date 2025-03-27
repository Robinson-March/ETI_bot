import { InlineKeyboard } from "grammy";
import { bot } from "../../bot";

// Function to generate the yearly subscription message
const yearlyMessage = (cryptoAmount: string, coin: string, address: string) => `
<b>Your Benefits:</b>

- 1-year access to signal channel.
- 5-7 premium signals daily.
- Technical Analysis Class.
- Fundamental Analysis.
- Psychology and mindset development.

<b>Price:</b> $199 USD ≈ ${cryptoAmount} ${coin}
<b>Billing Period:</b> 1 Year
<b>Billing Mode:</b> Recurring

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
    const cryptoAmount = (199 / usdRate).toFixed(6); // Convert $199 to crypto

    return yearlyMessage(cryptoAmount, symbol, address);
  } catch (error) {
    console.error(`Error fetching ${symbol} price:`, error);
    return `<b>${symbol} Payment Address:</b>\n<code>${address}</code>\n\n⚠️ Unable to fetch live price.`;
  }
};

// Define supported payment methods and their CoinGecko IDs
const yearlySignalPaymentOptions: Record<
  string,
  { id: string; symbol: string; address: string }
> = {
  yearly_signal_usdt_trc20: {
    id: "tether",
    symbol: "USDT (TRC20)",
    address: "TW2opq7dNFLQgf3MacnbSgezpFfinB8tm3",
  },
  yearly_signal_usdt_erc20: {
    id: "tether",
    symbol: "USDT (ERC20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  yearly_signal_btc: {
    id: "bitcoin",
    symbol: "BTC",
    address: "bc1qz0ltmf0m627fzqynahtxtmdvv8yrkeh620l3lh",
  },
  yearly_signal_eth: {
    id: "ethereum",
    symbol: "ETH",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  yearly_signal_ltc: {
    id: "litecoin",
    symbol: "LTC",
    address: "ltc1q69p9chl4x39ttmka8n90vaparwq7xxwrn6h0rr",
  },
  yearly_signal_doge: {
    id: "dogecoin",
    symbol: "DOGE",
    address: "DPnKhsKzzm2p18e5kDMRUx4FGt1BYcRJji",
  },
  yearly_signal_busd_bep20: {
    id: "binance-usd",
    symbol: "BUSD (BEP20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  yearly_signal_busd_erc20: {
    id: "binance-usd",
    symbol: "BUSD (ERC20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
};

// Function to generate the inline keyboard dynamically
const generateKeyboard = () => {
  const keyboard = new InlineKeyboard()
    .text("⚡ USDT (TRC20)", "yearly_signal_usdt_trc20")
    .row()
    .text("⚡ USDT (ERC20)", "yearly_signal_usdt_erc20")
    .row()
    .text("⚡ USDT (BEP20)", "yearly_signal_busd_bep20")
    .row()
    .text("⚡ BTC (Bitcoin)", "yearly_signal_btc")
    .row()
    .text("⚡ ETH (Ethereum)", "yearly_signal_eth")
    .row()
    .text("⚡ LTC (Litecoin)", "yearly_signal_ltc")
    .row()
    .text("⚡ DOGE (Dogecoin)", "yearly_signal_doge")
    .row()
    .text("⚡ BUSD (BEP20)", "yearly_signal_busd_bep20")
    .row()
    .text("⚡ BUSD (ERC20)", "yearly_signal_busd_erc20")
    .row();

  return keyboard;
};

// Handle payment method selection via callback queries
Object.entries(yearlySignalPaymentOptions).forEach(
  ([key, { id, symbol, address }]) => {
    bot.callbackQuery(key, async (ctx) => {
      const message = await getCryptoPrice(id, symbol, address);
      await ctx.editMessageText(message, { parse_mode: "HTML" });
    });
  }
);

// Command to start subscription and show the payment options
bot.command("subscribe", async (ctx) => {
  await ctx.reply(
    "<b>Select a payment method for your yearly signal subscription:</b>",
    {
      parse_mode: "HTML",
      reply_markup: generateKeyboard(),
    }
  );
});
