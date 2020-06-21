import { Client, MessageEmbed, WebhookClient } from 'discord.js'

// Earth 🍃
// Wind 🌪️
// Water 💧
// Fire 🔥
// Necrotic 💀
// Radiant ☀️
// Psychic 🧠

// Slashing ⚔️
// Pierceing 🏹
// Bludgening 🔨

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
    { name: "Damage/Effect",    value: '\🔥 Fire', inline: true },
    { name: "Description",      value: 'You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.', inline: false },
    { name: "At Higher Levels", value: 'When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.', inline: false },
  )
  .setFooter('Spell | PHB 250')
