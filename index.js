'use strict';
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

// logging, ig
bot.use(async (ctx, next) => {
	const start = new Date()
	await next()
	const ms = new Date() - start
	console.log('Response time: %sms', ms)
})

bot.on("inline_query", async ctx => {
	console.log(ctx.inlineQuery.query);
	// FIXME: breaks when I try adding another answer (the 2nd doesn't appear)
	const answer = [{
		"type": "article",
		"id": ctx.inlineQuery.id,
		"title": ctx.inlineQuery.query+" ¯\\_(ツ)_/¯",
		input_message_content: {
			message_text: ctx.inlineQuery.query+" ¯\\_(ツ)_/¯",
		}
	}
	];
	return ctx.answerInlineQuery(answer)
});

bot.command('shrug', Telegraf.reply('¯\\_(ツ)_/¯'))
bot.launch().then(console.log("Hello world o/"))