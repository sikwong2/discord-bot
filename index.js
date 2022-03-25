const Discord = require("discord.js")
require("dotenv").config()
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILDS_MESSAGES_REACTIONS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content.includes("fortnite") && message.author != client.user){
        message.reply("we like fortnite")
    }
    message.react("🍆")
})

client.login(process.env.TOKEN)
