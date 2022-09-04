module.exports = {
    "url": `https://discord.com/api/v10/applications/${process.env.ID}/guilds/563485823232638976/commands`,
    "method": 'POST',
    "auth": `Bot ${process.env.TOKEN}`,
    "headers": {
      "Authorization": `Bot ${process.env.TOKEN}`,
      'Content-Type': "application/json"
    }
  }