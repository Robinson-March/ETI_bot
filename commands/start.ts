import { bot } from "../bot";
import { startKeyboard } from "../utils/keyboards";

bot.command("start", (ctx) =>
  ctx.reply(
    `Welcome to <a href="https://google.com">EliteTrainingInstitution</a> 🥇 VIP!\n\nTo continue, please accept our:\n—<a href="https://google.com">Privacy Policy</a>\n\n You can proceed to our official website and read more about us by clicking on the link below 👇 \n\n <a href="https://google.com">Elite Trading Institution</a>`,
    { parse_mode: "HTML", reply_markup: startKeyboard }
  )
);
