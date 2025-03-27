import { bot } from "../bot";
import { InlineKeyboard } from "grammy";
import axios from "axios";
import { weeklyofferKeyboard, weekOfferKeyboard } from "../utils/keyboards";

const COINGECKO_API = "https://api.coingecko.com/api/v3/simple/price";

const weeklyOfferInfo = `Choose a weekly offer:`;

const generateOfferInfo = (
  price: number,
  returnAmount: number,
  cryptoAmount: string,
  symbol: string,
  address: string
) => `
<b>WEEKLY ACCOUNT MANAGEMENT OFFER.</b>

Your benefits:
✅ Free access to our Lifetime VIP channel (ELITE TRADERS CLUB).
✅ Free access to our Lifetime Mentorship.
✅ 15% referral bonus commission on each active member referred.
✅ Percentage Split 70%:30% (You get 70%, we get 30%).
✅ 10% referral bonus on reinvestment.

💵 Price: $${price.toLocaleString()} USD ≈ <b><u> ${cryptoAmount} ${symbol}</u>  </b>
📈 Return Amount: <b>$${returnAmount.toLocaleString()} USD  </b>
⏳ Duration: One week (5 trading days).

<b>${symbol} Payment Address:</b>  
<code>${address}</code>

🔹 Required details:  
- Full Name  
- Email Address  
- Receiving USDT/Ethereum Address  
`;

const weeklyAutomaticMessage = `
Proceed to our <a href="https://elitetradinginstitution.com/">official website</a> 

- Create an account  
- Log into your account dashboard  
- Click on "Connect Wallet" and connect your wallet  
- Click on "Account Management"  
- Buy a Plan  
- Choose your best weekly offer  
- Click on "JOIN PLAN" to apply for account management.
`;

const weeklyOffers = {
  "2000": { price: 2000 },
  "5000": { price: 5000 },
  "10000": { price: 10000 },
};

const paymentOptions = {
  usdt_trc20: {
    id: "tether",
    symbol: "USDT",
    address: "TW2opq7dNFLQgf3MacnbSgezpFfinB8tm3",
  },
  usdt_erc20: {
    id: "tether",
    symbol: "USDT",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  usdt_bep20: {
    id: "tether",
    symbol: "USDT",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  eth: {
    id: "ethereum",
    symbol: "ETH",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  btc: {
    id: "bitcoin",
    symbol: "BTC",
    address: "bc1qz0ltmf0m627fzqynahtxtmdvv8yrkeh620l3lh",
  },
  usdc_erc20: {
    id: "usd-coin",
    symbol: "USDC",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  usdc_trc20: {
    id: "usd-coin",
    symbol: "USDC",
    address: "TW2opq7dNFLQgf3MacnbSgezpFfinB8tm3",
  },
  ltc: {
    id: "litecoin",
    symbol: "LTC",
    address: "ltc1q69p9chl4x39ttmka8n90vaparwq7xxwrn6h0rr",
  },
  doge: {
    id: "dogecoin",
    symbol: "DOGE",
    address: "DPnKhsKzzm2p18e5kDMRUx4FGt1BYcRJji",
  },
  busd_bep20: {
    id: "binance-usd",
    symbol: "BUSD",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
  busd_erc20: {
    id: "binance-usd",
    symbol: "BUSD",
    address: "0x0e1164Dc9f517861C8aFcd7c171B92F95f8Dfa02",
  },
};

// Function to fetch crypto price and convert amount
const getCryptoPrice = async (coinId: string, priceUSD: number) => {
  try {
    const response = await axios.get(
      `${COINGECKO_API}?ids=${coinId}&vs_currencies=usd`
    );
    const usdRate = response.data[coinId]?.usd || 0;
    return usdRate ? (priceUSD / usdRate).toFixed(6) : "N/A";
  } catch (error) {
    console.error(`Error fetching ${coinId} price:`, error);
    return "N/A";
  }
};

// Handlers
bot.callbackQuery("automatic_weekly_deposit", (ctx) =>
  ctx.reply(weeklyAutomaticMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("manual_weekly_deposit", (ctx) =>
  ctx.reply("Choose a weekly offer:", {
    parse_mode: "HTML",
    reply_markup: weekOfferKeyboard,
  })
);

// Payment form selection
bot.callbackQuery("weekly_offer", (ctx) =>
  ctx.reply("Select your payment method:", {
    parse_mode: "HTML",
    reply_markup: weeklyofferKeyboard,
  })
);

// Handle offer selection with dynamic keyboard
Object.entries(weeklyOffers).forEach(([offerKey, { price }]) => {
  bot.callbackQuery(offerKey, (ctx) => {
    const keyboard = new InlineKeyboard()
      .text("⚡ USDT (Tether USD (Tron/TRC20))", `${offerKey}_usdt_trc20`)
      .row()
      .text("⚡ USDT (Tether USD (Ethereum/ERC20))", `${offerKey}_usdt_erc20`)
      .row()
      .text("⚡ USDT (Tether USD (BEP20))", `${offerKey}_usdt_bep20`)
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

    ctx.reply(
      `Select a cryptocurrency for the $${price.toLocaleString()} USD offer:`,
      {
        parse_mode: "HTML",
        reply_markup: keyboard,
      }
    );
  });
});

// Handle crypto payment selection dynamically
Object.entries(weeklyOffers).forEach(([offerKey, { price }]) => {
  Object.entries(paymentOptions).forEach(
    ([cryptoKey, { id, symbol, address }]) => {
      bot.callbackQuery(`${offerKey}_${cryptoKey}`, async (ctx) => {
        const cryptoAmount = await getCryptoPrice(id, price);
        const message = generateOfferInfo(
          price,
          price * 5, // Weekly offer return amount
          cryptoAmount,
          symbol,
          address
        );
        await ctx.reply(message, { parse_mode: "HTML" });
      });
    }
  );
});
