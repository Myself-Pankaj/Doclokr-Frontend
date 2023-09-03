const { Telegraf } = require("telegraf");
const TOKEN = "5552455164:AAGPOGsGkHyAwfuMROtbWy9tW-_mtfH4lfA";
const bot = new Telegraf(TOKEN);

const app_link = 'https://graceful-shortbread-de014e.netlify.app';

bot.start((ctx) => ctx.reply("Welcome", {
    reply_markup:{inline_keyboard:[[{text:'Sign Up',web_app:{url: app_link}},{text:'Login',web_app:{url: app_link}}]]}
}));

bot.launch();
