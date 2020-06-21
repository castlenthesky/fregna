// fregna (v). old norse. ask; learn; hear of; be informed;

import { Client, MessageEmbed, WebhookClient, Message } from "discord.js";
import { Db, MongoClient} from "mongodb";
import * as ytdl from 'ytdl-core'

import config from "./config";
import { handleCommand } from "./services"


const client = new Client();
const webhookClient = new WebhookClient(
  config.discord.webhookid,
  config.discord.webhooktoken
);

const cmdPrefix = ";";

client.on("ready", () => {
  console.info(`Logged in as ${client.user.tag}.`);
});

client.on("message", async (msg: Message) => {
  // Parse arguments out of any commands issued.
  if (msg.content.substring(0,1) === cmdPrefix) {
    let args = msg.content.substring(cmdPrefix.length).split(" ");
    handleCommand(msg);
  }
  
  // // handleCommand(args)

  // switch (args[0]) {
  //   case "test":
  //     console.log("Running test command.")
  //     msg.delete()
  //     break;

  //   case "roll":
  //     msg.delete()
  //     msg.channel.send(args[1]);
  //     break;

  //   case "join":
  //     if (!msg.member.voice.channel) {
  //       msg.reply("You need to join a voice channel first.");
  //     } else {
  //       msg.delete();
  //       const connection = await msg.member.voice.channel.join();
  //     }
  //     break;

  //   case "clear":
  //     msg.delete()
  //     msg.channel.bulkDelete(10)
  //       .then(messages => console.log(`Deleted ${messages.size} messages.`))
  //       .catch(console.error)
  //     break;

  //   case "leave":
  //     msg.delete();
  //     msg.guild.voice.channel.leave();
  //     break;

  //   case "fart":
  //     msg.delete();
  //     msg.channel.send(`${msg.author.username} just farted.`);
  //     break;

  //   case "play":
  //     if (!msg.member.voice.channel) {
  //       msg.reply("You need to join a voice channel first.");
  //     } else {
  //       msg.delete();
  //       const connection = await msg.member.voice.channel.join();
  //       const dispatcher = connection.play(
  //         ytdl(args[1], { filter: "audioonly" })
  //       );
  //       // dispatcher.setVolume(0.009);
  //       dispatcher.on("finish", () => {
  //         connection.play(ytdl(args[1], { filter: "audioonly" }));
  //       });
  //     }
  //     break;

  //   case "mystery":
  //     msg.delete();
  //     if (msg.member.voice.channel) {
  //       const connection = await msg.member.voice.channel.join();
  //       const dispatcher = connection.play(
  //         "./audio/Two Steps From Hell - Little Ben.mp3"
  //       );
  //       // dispatcher.setVolume(100);
  //       dispatcher.on("finish", () => {
  //         dispatcher.destroy();
  //       });
  //     } else {
  //       msg.reply("You need to join a voice channel first.");
  //     }
  //     break;
  // }
});

client.login(config.discord.bottoken);
