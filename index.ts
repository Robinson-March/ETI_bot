import { bot } from "./bot";
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
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
bot.start();
app.get("/", (req, res) => {
  res.send("Telegram bot is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
