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
        message.reply("We've got a, Number 1 Victory Royale.\nYeah, Fortnite we 'bout to get down (get down).\nTen kills on the board right now.\nJust wiped out Tomato Town.\nMy friend just got downed.\nLook at the map, go to the marked sheet")
    }
    message.react("🍆")
})

client.login(process.env.TOKEN)
