import { bot } from "../bot";
import { paymentKeyboard } from "../utils/keyboards";

const mentorshipMessage = `
<b>Your Benefits:</b>

-Lifetime Membership 
-Telegram Support group.
-Advanced Fundamental Analysis(Centre Bank/Monetary policy,Interest rates, Inflation data analysis, Employment and Unemployment data analysis, Geo political Events).
-Advanced Technical Analysis(Full access to my strategy,Daily Mapping Reasons for entry and reason for exit).
-Access to my full course (PDF)
-Past and Future webinars 
-24hrs access to online Training 
-Access to all recorded Content

Price: $999 USD 
Billing period: lifetime`;

bot.command("mentorship_course", (ctx) =>
  ctx.reply(mentorshipMessage, {
    parse_mode: "HTML",
    reply_markup: paymentKeyboard,
  })
);

bot.callbackQuery("mentorship_course", (ctx) =>
  ctx.reply(mentorshipMessage, {
    parse_mode: "HTML",
    reply_markup: paymentKeyboard,
  })
);
