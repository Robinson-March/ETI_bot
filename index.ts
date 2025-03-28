import { bot } from "./bot";
import express from "express";
import fs from "fs";
import "./commands/start";
import "./commands/whoWeAre";
import "./commands/publicGroup";
import "./commands/tradeSignals";
import "./commands/accountManagement";
import "./commands/becomePartner";
import "./commands/reviews";
import "./commands/contactUs";
import "./commands/moreInfo";
import "./handlers/accepted";
import "./callbacks/weeklyOffer";
import "./callbacks/monthlyOffers";
import "./commands/mentorship";
import "./callbacks/paymentsCallback";

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Logs messages to a file and console
 * @param message - Log message to store
 */
const logToFile = (message: string) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;

  console.log(logMessage); // Print to console
  fs.appendFileSync("bot_logs.txt", logMessage); // Store in file
};

// Middleware to log HTTP requests
app.use((req, res, next) => {
  const logMessage = `🔹 HTTP Request: ${req.method} ${req.url} from ${req.ip}`;
  logToFile(logMessage);
  next();
});

// Express route to confirm bot is running
app.get("/", (req, res) => {
  res.send("Telegram bot is running.");
});

// Start Express server
app.listen(PORT, () => {
  logToFile(`🚀 Server is running on port ${PORT}`);
});

// Start the bot
bot.start();

/**
 * Logs Telegram user information
 * @param ctx - Telegram context
 */
const logUserInfo = (ctx: any, action: string) => {
  const user = ctx.from;
  const logMessage = `👤 User ${action} - 🆔 ID: ${user.id}, 🏷 Name: ${
    user.first_name
  } ${user.last_name || ""}, 🔗 Username: @${
    user.username || "N/A"
  }, 🌎 Language: ${user.language_code}`;
  logToFile(logMessage);
};

// Log /start command interactions
bot.command("start", (ctx: any) => {
  logUserInfo(ctx, "started the bot");
  ctx.reply(`Welcome, ${ctx.from.first_name}! Your ID: ${ctx.from.id}`);
});

// Log all messages received
bot.on("message", (ctx) => {
  const user = ctx.from;
  const userMessage = `📩 Message from 🆔 ${user.id} (${user.first_name}): ${ctx.message.text}`;
  logToFile(userMessage);
});

// Log button clicks (callback queries)
bot.on("callback_query", (ctx) => {
  const user = ctx.from;
  const buttonClick = `🔘 Button Click by 🆔 ${user.id} (${user.first_name}): ${ctx.callbackQuery.data}`;
  logToFile(buttonClick);
});
