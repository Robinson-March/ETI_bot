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
  .text("📋 COPY TRADE", "copy_trade")
  .row()
  .text("🤝 BECOME OUR PARTNER", "become_partner")
  .row()
  .text("⭐ REVIEWS", "reviews")
  .row()
  .text("🤳 Contact Us", "contact_us");

export const tradeSignalsKeyboard = new InlineKeyboard()
  .text("Yearly $199", "subscribe_yearly")
  .text("Lifetime $499", "subscribe_lifetime");

export const yearlySignalKeyboard = new InlineKeyboard()
  .text("Manual Yearly Deposit", "manual_yearly_deposit")
  .text("Automatic Yearly Deposit", "automatic_yearly_deposit");
export const lifetimeSignalKeyboard = new InlineKeyboard()
  .text("Manual Lifetime Deposit", "manual_lifetime_deposit")
  .text("Automatic Lifetime Deposit", "automatic_lifetime_deposit");
export const weeklyofferKeyboard = new InlineKeyboard()
  .text("Manual Deposit", "manual_weekly_deposit")
  .text("Automatic Deposit", "automatic_weekly_deposit");
export const mentorshipKeyboard = new InlineKeyboard()
  .text("Manual Deposit", "manual_mentorship_course")
  .text("Automatic Deposit", "automatic_mentorship_course");
export const monthlyofferKeyboard = new InlineKeyboard()
  .text("Manual Deposit", "manual_monthly_deposit")
  .text("Automatic Deposit", "automatic_monthly_deposit");

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

// Create an inline keyboard with all payment methods
export const paymentKeyboard = new InlineKeyboard()
  .text("⚡ USDT (Tether USD (Tron/TRC20))", "usdt_trc20")
  .row()
  .text("⚡ USDT (Tether USD (Ethereum/ERC20))", "usdt_erc20")
  .row()
  .text("⚡ USDT (Tether USD (BEP20))", "usdt_bep20")
  .row()
  .text("⚡ ETH (Ether)", "eth")
  .row()
  .text("⚡ BTC (Bitcoin)", "btc")
  .row()
  .text("⚡ USDC (USD Coin (ERC20))", "usdc_erc20")
  .row()
  .text("⚡ USDC (USD Coin (TRC20))", "usdc_trc20")
  .row()
  .text("⚡ LTC (Litecoin)", "ltc")
  .row()
  .text("⚡ DOGE (Dogecoin)", "doge")
  .row()
  .text("⚡ BUSD (Binance USD (BEP20))", "busd_bep20")
  .row()
  .text("⚡ BUSD (Binance USD (ERC20))", "busd_erc20")
  .row()
  .text("🔑 Access Code", "access_code")
  .row()
  .text("« Back", "back");
