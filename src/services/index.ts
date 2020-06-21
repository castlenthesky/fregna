import { Message } from "discord.js";
import * as fs from 'fs'
import * as path from 'path'

export async function handleCommand(msg: Message) {
  msg.delete();

  let args = msg.content.substring(1).split(" ");
  let command = args[0];
  args.shift();

  switch (command) {
    case "clear":
      msg.channel
        .bulkDelete(10)
        .then((messages) => console.log(`Deleted ${messages.size} messages.`))
        .catch(console.error);
      break;

    // Handle roll commands
    case "roll":
      console.log(args);
      break;

    case "r":
      console.log(args);
      break;

    case "join":
      if (!msg.member.voice.channel) {
        msg.reply("You need to join a voice channel first.");
      } else {
        const connection = await msg.member.voice.channel.join();
      }
      break;

    case "play":
      if (msg.member.voice.channel) {
        const connection = await msg.member.voice.channel.join();
        const dispatcher = await connection.play(fs.createReadStream('./little_ben.mp3'));
        dispatcher.on("finish", () => {
          dispatcher.destroy();
        });
      } else {
        msg.reply("You need to join a voice channel first.");
      }
      break;

    case "leave":
      msg.guild.voice.channel.leave();
      break;

    default:
      break;
  }
}
