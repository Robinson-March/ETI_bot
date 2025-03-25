import { bot } from "../bot";

const reviewsMessage = `
Check out what our clients say: <a href="https://elitetradinginstitution.com/review.html">Reviews</a>
`;

bot.command("reviews", (ctx) =>
  ctx.reply(reviewsMessage, { parse_mode: "HTML" })
);

bot.callbackQuery("reviews", (ctx) =>
  ctx.reply(reviewsMessage, { parse_mode: "HTML" })
);
