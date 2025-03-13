import { InlineKeyboard } from "grammy";

export const startKeyboard = new InlineKeyboard().text(
  "✅ I Accept",
  "accepted"
);

export const optionsKeyboard = new InlineKeyboard()
  .text("📌 WHO WE ARE", "who_we_are")
  .row()
  .text("📢 PUBLIC GROUP", "public_group")
  .row()
  .text("📊 TRADE SIGNALS", "trade_signals")
  .row()
  .text("📚 MENTORSHIP COURSE", "mentorship_course")
  .row()
  .text("💰 ACCOUNT MANAGEMENT", "account_management")
  .row()
  .text("🤝 BECOME OUR PARTNER", "become_partner")
  .row()
  .text("⭐ REVIEWS", "reviews")
  .row()
  .text("🤳 Contact Us", "contact_us");

export const tradeSignalsKeyboard = new InlineKeyboard()
  .text("Yearly $199", "subscribe_yearly")
  .text("Lifetime $499", "subscribe_lifetime");


export const accountManagementKeyboard = new InlineKeyboard()
  .text("Weekly offer", "weekly_offer")
  .text("Monthly offer", "monthly_offer");

export const weekOfferKeyboard = new InlineKeyboard()
  .text("💰 Deposit $2,000 get $10,000", "2000")
  .row()
  .text("💰💰 Deposit $5,000 get $25,000", "5000")
  .row()
  .text("💰💰💰 Deposit $10,000 get $50,000", "10000");

export const monthlyOfferKeyboard = new InlineKeyboard()
  .text("💸 Deposit $50,000 get $350,000", "50000")
  .row()
  .text("💸💸 Deposit $100,000 get $700,000", "100000")
  .row()
  .text("💸💸💸 Deposit $500,000 get $3,500,000", "500000");

export const paymentKeyboard = new InlineKeyboard()
  .text("⚡ USDT (Tether USD (Tron/TRC20))", "usdt_trc20")
  .row()
  .text("⚡ USDT (Tether USD (Ethereum/ERC20))", "usdt_erc20")
  .row()
  .text("⚡ USDT (Tether USD (BEP2))", "usdt_bep2")
  .row()
  .text("⚡ USDT (Tether USD (BEP20))", "usdt_bep20")
  .row()
  .text("⚡ ETH (Ether)", "eth")
  .row()
  .text("⚡ BTC (Bitcoin)", "btc")
  .row()
  .text("⚡ USDC (USD Coin (ERC20))", "usdc")
  .row()
  .text("⚡ LTC (Litecoin)", "ltc")
  .row()
  .text("⚡ DOGE (Dogecoin)", "doge")
  .row()
  .text("🔑 Access Code", "access_code")
  .row()
  .text("« Back", "back");
