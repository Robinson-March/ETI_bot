# ETI - Elite Training Institution Telegram Bot

ETI is a **Telegram bot** built using [Grammy](https://grammy.dev/) and [Bun](https://bun.sh/) that provides trading-related services, including mentorship, account management, and trade signals. The bot allows users to accept terms before accessing the available commands.

## 🚀 Features

- Accept terms before using commands
- View information about Elite Training Institution
- Join the public trading community
- Subscribe to trade signals
- Enroll in a mentorship course
- Participate in an account management program
- Partner with ETI for commissions
- Read client reviews

## 🛠️ Tech Stack

- **Bun** - Runtime
- **Grammy** - Telegram Bot Framework
- **Express** - Web server for Cloud Run

## 📦 Installation

Make sure you have **Bun** installed. If not, install it:

```sh
curl -fsSL https://bun.sh/install | bash
```

Then, clone the repository and install dependencies:

```sh
git clone https://github.com/yourusername/eti-bot.git
cd eti-bot
bun install
```

## 🏗️ Setup

Create a `.env` file in the root directory and add your **Telegram Bot API Key**:

```env
BOT_KEY=your_telegram_bot_key
PORT=3000
```

## 🚀 Running the Bot

To start the bot locally:

```sh
bun run index.ts
```

or in watch mode for development:

```sh
bun run --watch index.ts
```

## 📡 Deploying to Cloud Run

Build and deploy the bot using **Google Cloud Run**:

```sh
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/eti-bot
gcloud run deploy eti-bot --image gcr.io/YOUR_PROJECT_ID/eti-bot --platform managed --allow-unauthenticated
```

## 🛠️ Available Commands

| Command               | Description                                 |
| --------------------- | ------------------------------------------- |
| `/start`              | Start the bot and accept terms              |
| `/who_we_are`         | Learn about ETI                             |
| `/public_group`       | Join the public trading group               |
| `/trade_signals`      | Subscribe to trade signals                  |
| `/mentorship_course`  | Enroll in the mentorship program            |
| `/account_management` | Participate in the account management offer |
| `/become_partner`     | Join as a partner and earn commissions      |
| `/reviews`            | Read client reviews                         |

## 📜 License

This project is licensed under the **MIT License**.

---

Made with ❤️ by **Elite Training Institution** 🥇
