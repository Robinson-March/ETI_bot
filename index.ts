import { Bot, InlineKeyboard } from "grammy";
import express from "express";

const bot = new Bot(process.env.BOT_KEY || "");

const accountManagementInfo =
  "ACCOUNT MANAGEMENT OFFER \n\nFor our subscribers that wants to participate in our weekly account management offer can join us now.\n-Percentage split 70%:30%\n-Depositor will get 70%\n-We get 30% after trade.\n-Zero withdrawal Charges.\n\n\n WEEKLY OFFER \n\n\n-Deposit $2,000 get $10,000\n\n-Deposit $5,000 get $25,000\n\n-Deposit $10,000 get $50,000\n\n\n\n\n MONTHLY OFFER \n\n\n-Deposit $50,000 get $350,000\n\n-Deposit $100,000 get $700,000\n\n-Deposit $500,000 get $3,500,000\n\n\n\n\nDisclaimer:\n\nThis offer works perfectly for our busy subscribers, newbies, or traders that lost their capital.";

// Start Command - Accept Button
const startKeyboard = new InlineKeyboard().text("✅ I Accept", "accepted");

bot.command("start", (ctx) =>
  ctx.reply(
    `Welcome to <a href="https://google.com">EliteTrainingInstitution</a> 🥇 VIP!\n\nTo continue, please accept:\n—<a href="https://google.com">Privacy Policy</a>\n\n You can proceed to our official website and read more about us by clicking on the link below 👇 \n\n <a href="https://google.com">Elite Trading Institution</a>`,
    { parse_mode: "HTML", reply_markup: startKeyboard }
  )
);

// Handle acceptance and suggest available commands
bot.callbackQuery("accepted", async (ctx) => {
  await ctx.answerCallbackQuery(); // Acknowledge the button press

  // Suggest available commands
  const optionsKeyboard = new InlineKeyboard()
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
    .text("🔧 Services", "services");

  await ctx.reply(
    `Welcome to Elite Trading Institution!
    
    I am your friendly neighbourhood payment bot, you can explore our services below.

If you need assistance please <a href="http://t.me/Elitestraderadmin">message/reply here</a> and my team will be happy to direct you.`,
    { reply_markup: optionsKeyboard }
  );
});

// WHO WE ARE
const whoWeAreMessage = `<a href="https://google.com">EliteTrainingInstitution</a> 🥇 VIP!\n\nWe are a professional trading group dedicated to helping traders succeed!`;

bot.command("who_we_are", (ctx) =>
  ctx.reply(whoWeAreMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("who_we_are", (ctx) =>
  ctx.reply(whoWeAreMessage, { parse_mode: "HTML" })
);

// PUBLIC GROUP
const publicGroupMessage =
  'Join our public group here: <a href="https://t.me/Elitetrading_institution">Telegram Group</a>';

bot.command("public_group", (ctx) =>
  ctx.reply(publicGroupMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("public_group", (ctx) =>
  ctx.reply(publicGroupMessage, { parse_mode: "HTML" })
);

const tradeSignalsKeyboard = new InlineKeyboard()
  .text("Yearly $199", "subscribe_yearly")
  .text("Lifetime $499", "subscribe_lifetime");

const tradeSignalsMessage = `Welcome to Elite Trading Institution! 
I am your friendly neighbourhood payment bot, you can subscribe below.

If you need assistance, please <a href="http://t.me/Elitestraderadmin">message/reply</a> directly here, and my team will be happy to help you 😊

Available plans: /plans  
More information: <a href="https://google.com">Click Here</a>  
Public Group: <a href="https://t.me/Elitetrading_institution">Here</a>  

Please select your subscription plan:`;

// Fix 1: Handle "/trade_signals" Command
bot.command("trade_signals", (ctx) =>
  ctx.reply(tradeSignalsMessage, {
    parse_mode: "HTML",
    reply_markup: tradeSignalsKeyboard,
  })
);

// Fix 2: Handle Trade Signals Button Click
bot.callbackQuery("trade_signals", (ctx) =>
  ctx.reply(tradeSignalsMessage, {
    parse_mode: "HTML",
    reply_markup: tradeSignalsKeyboard,
  })
);

bot.command("plans", (ctx) =>
  ctx.reply("Please select your subscription plan:", {
    parse_mode: "HTML",
    reply_markup: tradeSignalsKeyboard,
  })
);

// /moreinfo redirects to a link
bot.command("moreinfo", (ctx) =>
  ctx.reply(
    'For more information, visit: <a href="https://google.com">Click Here</a>',
    { parse_mode: "HTML" }
  )
);

// MENTORSHIP COURSE
const mentorshipCourseMessage =
  'Enroll in our mentorship course here: <a href="https://google.com">Mentorship Course</a>';

bot.command("mentorship_course", (ctx) =>
  ctx.reply(mentorshipCourseMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("mentorship_course", (ctx) =>
  ctx.reply(mentorshipCourseMessage, { parse_mode: "HTML" })
);

// ACCOUNT MANAGEMENT OFFER
const accountManagementMessage = `Let us manage your trading account professionally. Contact us here: <a href="https://google.com">Account Management</a>\n\n${accountManagementInfo}`;

bot.command("account_management", (ctx) =>
  ctx.reply(accountManagementMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("account_management", (ctx) =>
  ctx.reply(accountManagementMessage, { parse_mode: "HTML" })
);

// BECOME OUR PARTNER
const becomePartnerMessage =
  'Join us as a partner and earn commissions. Learn more here: <a href="https://google.com">Partnership Program</a>';

bot.command("become_partner", (ctx) =>
  ctx.reply(becomePartnerMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("become_partner", (ctx) =>
  ctx.reply(becomePartnerMessage, { parse_mode: "HTML" })
);

// REVIEWS
const reviewsMessage =
  'Check out what our clients say: <a href="https://google.com">Reviews</a>';

bot.command("reviews", (ctx) =>
  ctx.reply(reviewsMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("reviews", (ctx) =>
  ctx.reply(reviewsMessage, { parse_mode: "HTML" })
);
const servicesMessage =
  'Contact Us by clicking: <a href="http://T.me/Elitestraderadmin">here</a>';

bot.command("services", (ctx) =>
  ctx.reply(servicesMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("services", (ctx) =>
  ctx.reply(servicesMessage, { parse_mode: "HTML" })
);

// Handle unknown commands
bot.on("message", (ctx) =>
  ctx.reply("Use one of the available commands to get started!", {
    parse_mode: "HTML",
  })
);

// Start the bot
bot.start();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: any, res: any) => {
  res.send("Telegram bot is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
