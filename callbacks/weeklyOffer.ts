import { bot } from "../bot";
import { InlineKeyboard } from "grammy";
import axios from "axios";
import { weeklyofferKeyboard, weekOfferKeyboard } from "../utils/keyboards";
import { paymentOptions } from "../utils/crypto"; // Import crypto payment options

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
  const keyboard = new InlineKeyboard();

  Object.entries(paymentOptions).forEach(([cryptoKey, { symbol }]) => {
    keyboard.text(`⚡ ${symbol}`, `${offerKey}_${cryptoKey}`).row();
  });

  keyboard.text("🔑 Access Code", `${offerKey}_access_code`).row();
  keyboard.text("« Back", "back").row();

  bot.callbackQuery(offerKey, (ctx) =>
    ctx.reply(
      `Select a cryptocurrency for the $${price.toLocaleString()} USD offer:`,
      {
        parse_mode: "HTML",
        reply_markup: keyboard,
      }
    )
  );
});

// Handle crypto payment selection dynamically
Object.entries(weeklyOffers).forEach(([offerKey, { price }]) => {
  Object.entries(paymentOptions).forEach(
    ([cryptoKey, { id, symbol, address }]) => {
      bot.callbackQuery(`${offerKey}_${cryptoKey}`, async (ctx) => {
        const cryptoAmount = await getCryptoPrice(id, price);
        const message = generateOfferInfo(
          price,
          price * 5,
          cryptoAmount,
          symbol,
          address
        );
        await ctx.reply(message, { parse_mode: "HTML" });
      });
    }
  );
});
