// index.js
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.CHAT_ID; // ID grup atau user
const bot = new TelegramBot(token, { polling: true });

// Simulasi transaksi Polkadot (ganti dengan API asli)
async function checkPolkadotTx() {
  const tx = await axios.get('https://api.example.com/polkadot/latest-buy');
  if (tx.data && tx.data.amount > 0) {
    bot.sendMessage(chatId, `💸 Buy Detected!\nAmount: ${tx.data.amount} DOT\nFrom: ${tx.data.from}`);
  }
}

// Cek transaksi setiap 30 detik
setInterval(checkPolkadotTx, 30000);
