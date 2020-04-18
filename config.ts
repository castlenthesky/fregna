const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envConfig = dotenv.config();

if (!envConfig) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export let config = {
  youtube: {
    key: process.env.YOUTUBEAPIKEY,
  },
  discord: {
    bottoken: process.env.DISCORDBOTTOKEN,
    webhookid: process.env.DISCORDWEBHOOKID,
    webhooktoken: process.env.DISCORDWEBHOOKTOKEN
  }
}
