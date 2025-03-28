import { bot } from "../bot";
import { monthlyofferKeyboard, monthlyOfferKeyboard } from "../utils/keyboards";
import { InlineKeyboard } from "grammy";
import axios from "axios";
import { paymentOptions } from "../utils/crypto";

const COINGECKO_API = "https://api.coingecko.com/api/v3/simple/price";

const monthlyOfferInfo = `Choose a monthly offer`;

const generateOfferInfo = (
  price: number,
  returnAmount: number,
  cryptoAmount: string,
  symbol: string,
  address: string
) => `
<b>MONTHLY ACCOUNT MANAGEMENT OFFER.</b>


Please send <b><u> ${cryptoAmount} ${symbol} </u> </b> (exact amount, after commissions) to the following address:

<code>${address}</code>

This unique address is valid only for 7 hours. Your payment will be processed once we confirm your deposit.

Click on contact us button and share the screenshot of your deposit to the admin for confirmation.  
`;

const monthlyAutomaticMessage = `
Proceed to our <a href="https://elitetradinginstitution.com/">official website</a> 

- Create an account  
- Log into your account dashboard  
- Click on "Connect Wallet" and connect your wallet  
- Click on "Account Management"  
- Buy a Plan  
- Choose your best monthly offer  
- Click on "JOIN PLAN" to apply for account management.
`;

const offers = {
  "50000": { price: 50000 },
  "100000": { price: 100000 },
  "500000": { price: 500000 },
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
bot.callbackQuery("automatic_monthly_deposit", (ctx) =>
  ctx.reply(monthlyAutomaticMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("manual_monthly_deposit", (ctx) =>
  ctx.reply(monthlyOfferInfo, {
    parse_mode: "HTML",
    reply_markup: monthlyOfferKeyboard,
  })
);

bot.callbackQuery("monthly_offer", (ctx) =>
  ctx.reply("Select your payment method:", {
    parse_mode: "HTML",
    reply_markup: monthlyofferKeyboard,
  })
);

// Handle offer selection with dynamic keyboard
Object.entries(offers).forEach(([offerKey, { price }]) => {
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
Object.entries(offers).forEach(([offerKey, { price }]) => {
  Object.entries(paymentOptions).forEach(
    ([cryptoKey, { id, symbol, address }]) => {
      bot.callbackQuery(`${offerKey}_${cryptoKey}`, async (ctx) => {
        const cryptoAmount = await getCryptoPrice(id, price);
        const message = generateOfferInfo(
          price,
          price * 7,
          cryptoAmount,
          symbol,
          address
        );
        await ctx.reply(message, { parse_mode: "HTML" });
      });
    }
  );
});
