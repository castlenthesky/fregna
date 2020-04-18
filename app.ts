// fregna (v). old norse. ask; learn; hear of; be informed;

import { config } from './config'
import { Client, MessageEmbed, WebhookClient } from 'discord.js'
import * as fs from 'fs'
import * as ytdl from 'ytdl-core'
import * as https from 'https'

const client = new Client()
const webhookClient = new WebhookClient(config.discord.webhookid, config.discord.webhooktoken)

const cmdPrefix = ';'

const embed = new MessageEmbed()
  .setColor('#00b0f4')
  .setTitle('Hellish Rebuke')
  .setDescription('*1st level evocation. (Warlock, Paladin (Oathbreaker)*')
  .addFields(
    { name: "Casting Time",     value: '1 reaction, which you take in response to being damaged by a creature within 60 feet of you that you can see', inline: true },
    { name: "Range",            value: '60 feet', inline: true },
    { name: "Components",       value: 'V, S', inline: true },
    { name: "Duration",         value: 'Instantaneous', inline: true },
    { name: "Attack/Save",      value: 'DEX Save', inline: true },
    { name: "Damage/Effect",    value: '🔥 Fire', inline: true },
    { name: "Description",      value: 'You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.', inline: false },
    { name: "At Higher Levels", value: 'When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.', inline: false },
  )
  .setFooter('Spell | PHB 250')


client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}.`)
  webhookClient.send('Fregna Restarted.')
  // fs.writeFile('./data.json', JSON.stringify(client.guilds.cache, null, 2), () => {console.log('Wrote JSON file.')});
  // console.log(client.guilds.cache)
})

client.on('message', msg => {
  if (msg.content === ";ping") {
    msg.delete()
    webhookClient.send('', {
      username: msg.author.username,
      avatarURL: msg.author.displayAvatarURL(),
      embeds: [embed],
    });
  }
})

client.on('message', async msg => {

  // Add "GAY" reaction to anything getto says.
  if ((msg.author.username === 'Gettomagic' || msg.author.username === 'Chevtastic')) {
    msg.react('🇬')
      .then(() => msg.react('🇦'))
      .then(() => msg.react('🇾'))
  }

  // Parse arguments out of any commands issued.
  let args = msg.content.substring(cmdPrefix.length).split(" ");

  switch (args[0]) {
    case 'r':
      msg.reply('You rolled something.')
      break;

    case 'join':
      if (!msg.member.voice.channel) {msg.reply('You need to join a voice channel first.')}
      else {
        msg.delete()
        const connection = await msg.member.voice.channel.join()
      }
      break;

    case 'play':
      if (!msg.member.voice.channel) {msg.reply('You need to join a voice channel first.')}
      else {
        msg.delete()
        const connection = await msg.member.voice.channel.join()
        const dispatcher = connection.play(ytdl(args[1], { filter: 'audioonly' })) 
        dispatcher.setVolume(0.009)
        dispatcher.on('finish', () => {
          connection.play(ytdl(args[1], { filter: 'audioonly' }))
        })
      }
      break;
      
    case 'mystery':
      msg.delete()
      if (msg.member.voice.channel) {
        const connection = await msg.member.voice.channel.join()
        const dispatcher = connection.play(('./audio/Two Steps From Hell - Little Ben.mp3'))
        dispatcher.setVolume(0.025)
        dispatcher.on('finish', () => {
          dispatcher.destroy()
        })
      } else {
        msg.reply('You need to join a voice channel first.')
      }
    break;
  }
})

client.on('message', async (msg) => {
  // If the message is "how to embed"
  if (msg.content === 'embed') {
    msg.delete()
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the title of the field  
      .setTitle('Spooky Sounds')
      // Set the main content of the embed
      .setDescription('Click on a link below to trigger a sound or begin a playlist!')
      .addFields(
        { name: "Celtic/Folk",  value: '[Google](https://google.com/)', inline: true },
        { name: "Constitution", value: 10, inline: true },
        { name: "Dexterity",    value: 18, inline: true },
        { name: "Intelligence", value: 12, inline: true },
        { name: "Wisdom",       value: 10, inline: true },
        { name: "Charisma",     value: 16, inline: true },
        )
    // Send the embed to the same channel as the message
    msg.channel.send(embed);
  }
});

client.login(config.discord.bottoken)

// // Youtube API
// const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLJDnhF2mAtd6dUib99f9ubN-hsuTUcg2x&key=${config.youtube.key}`
// // Retrieve Playlist Members
// https.get(url, (res) => {
//   res.setEncoding('utf8');
//   let rawData = '';
//   res.on('data', (chunk) => { rawData += chunk; });
//   res.on('end', () => {
//     try {
//       const parsedData = JSON.parse(rawData);
//       console.log(parsedData);
//     } catch (e) {
//       console.error(e.message);
//     }
//   });
// })
