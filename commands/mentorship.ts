import { InlineKeyboard } from "grammy";
import { bot } from "../bot";
import { mentorshipKeyboard } from "../utils/keyboards";

// Function to generate the mentorship message
const mentorshipMessage = (
  cryptoAmount: string,
  coin: string,
  address: string
) => `
<b>Elite Trading Mentorship Program</b>

📌 <a href="https://elitetradinginstitution.com/">Visit our official website</a>

🔹 **Steps to Enroll:**
1. Create an account on our website.
2. Log in to your dashboard.
3. Click on "Connect Wallet" and link your wallet.
4. Navigate to "Purchase Signals."
5. Select **"MENTORSHIP OFFER."**
6. Click "Subscribe" to finalize your enrollment.

🎓 **What You'll Gain:**
✅ In-depth trading education (technical & fundamental analysis).  
✅ Personalized mentorship from experienced traders.  
✅ Exclusive trading strategies and market insights.  
✅ Live trading sessions & Q&A.  
✅ Access to our private trading community.  

<b>Price:</b> $999 USD ≈ ${cryptoAmount} ${coin}  
<b>Billing period:</b> Lifetime  

<b>${coin} Payment Address:</b>  
<code>${address || "No payment address available"}</code>  
`;

// Function to fetch crypto price from CoinGecko and calculate equivalent cost
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

    const usdRate = data[coinId].usd; // Get current USD price
    const cryptoAmount = (999 / usdRate).toFixed(6); // Convert $999 to crypto

    return mentorshipMessage(cryptoAmount, symbol, address);
  } catch (error) {
    console.error(`Error fetching ${symbol} price:`, error);
    return `<b>${symbol} Payment Address:</b>\n<code>${address}</code>\n\n⚠️ Unable to fetch live price.`;
  }
};

// Supported crypto payment options (with unique callback keys)
const paymentOptions = {
  mentorship_usdt_trc20: {
    id: "tether",
    symbol: "USDT (TRC20)",
    address: "TW2opq7dNFLQgf3MacnbSgezpFfinB8tm3",
  },
  mentorship_usdt_erc20: {
    id: "tether",
    symbol: "USDT (ERC20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  mentorship_btc: {
    id: "bitcoin",
    symbol: "BTC",
    address: "bc1qz0ltmf0m627fzqynahtxtmdvv8yrkeh620l3lh",
  },
  mentorship_eth: {
    id: "ethereum",
    symbol: "ETH",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  mentorship_ltc: {
    id: "litecoin",
    symbol: "LTC",
    address: "ltc1q69p9chl4x39ttmka8n90vaparwq7xxwrn6h0rr",
  },
  mentorship_doge: {
    id: "dogecoin",
    symbol: "DOGE",
    address: "DPnKhsKzzm2p18e5kDMRUx4FGt1BYcRJji",
  },
  mentorship_busd_bep20: {
    id: "binance-usd",
    symbol: "BUSD (BEP20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  mentorship_busd_erc20: {
    id: "binance-usd",
    symbol: "BUSD (ERC20)",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
};

// Telegram bot commands
bot.command("mentorship_course", (ctx) =>
  ctx.reply("Select your mentorship length:", {
    parse_mode: "HTML",
    reply_markup: mentorshipKeyboard,
  })
);

bot.callbackQuery("mentorship_course", (ctx) =>
  ctx.reply("Select your mentorship length:", {
    parse_mode: "HTML",
    reply_markup: mentorshipKeyboard,
  })
);

bot.callbackQuery("manual_mentorship_course", async (ctx) => {
  const keyboard = new InlineKeyboard();

  Object.entries(paymentOptions).forEach(([key, { symbol }]) => {
    keyboard.text(symbol, key).row();
  });

  await ctx.reply("Select a cryptocurrency for payment:", {
    parse_mode: "HTML",
    reply_markup: keyboard,
  });
});

// Handle crypto payment selection with unique callback keys
Object.entries(paymentOptions).forEach(([key, { id, symbol, address }]) => {
  bot.callbackQuery(key, async (ctx) => {
    const message = await getCryptoPrice(id, symbol, address);
    await ctx.reply(message, { parse_mode: "HTML" });
  });
});

const mentorshipAutomaticMessage = `
Proceed to our <a href="https://elitetradinginstitution.com/">official website</a> 

- Create an account  
- Log into your account dashboard  
- Click on "Connect Wallet" and connect your wallet  
- Click on "Purchase Signals"  
- Select **"MENTORSHIP OFFER"**  
- Click "Subscribe" to complete your purchase  
`;

bot.callbackQuery("automatic_mentorship_course", async (ctx) => {
  await ctx.reply(mentorshipAutomaticMessage, { parse_mode: "HTML" });
});
