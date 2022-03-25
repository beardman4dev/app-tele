"use strict"

const TelegramBot = require("node-telegram-bot-api")
const TelegramBotToket = process.env.TELEGRAM_BOT_TOKEN || "5206127735:AAFYvyoPMSJGs9Rhk2ezGueYcS2s57wgGqI"
// const TelegramChannel = "@beardman4devTest"
const TelegramPrivateChannel = "-1001706426512"
const TelegramBotChannel = "1055809257"

module.exports.start = () => {
    const bot = new TelegramBot(TelegramBotToket, { polling: true })

    const myCommand = [
        { command: "hello", description: "say hello", cb: cbHello },
        { command: "help", description: "say ololo help", cb: cbHelp },
    ]

    bot.setMyCommands(myCommand)
    bot.sendMessage(TelegramBotChannel, "Started!")

    bot.on("message", (msg) => {
        console.log({ message: msg })
        // bot.sendMessage(msg.chat.id, "Ololo")
    })

    bot.onText(/\/(help|hello) (.+)/, (msg, match) => {
        console.log({ msg, match })

        const obj = myCommand.find((el) => el.command === match[1])
        if (obj) {
            obj.cb(msg, match[2])
        }
    })
}

function cbHello(msg, match) {
    bot.sendMessage(msg.chat.id, `Match: ${match}`)
}

function cbHelp(msg, match) {
    const a = 1
    bot.sendMessage(TelegramPrivateChannel, match)
    // bot.sendMessage(msg.chat.id, `Match cbHelp: ${match}`)
    // msg.telegram.sendMessage(TelegramChannel, match)
}
