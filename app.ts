import config from './config'
import * as Discord from 'discord.js'

const bot = new Discord.Client()

bot.login(config.token)

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}.`)
})
