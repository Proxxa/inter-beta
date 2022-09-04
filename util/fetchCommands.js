const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
  
module.exports = (
  async () =>
    await(await fetch(`https://discord.com/api/applications/${process.env.ID}/guilds/563485823232638976/commands`,
      {
        headers: {
          'Authorization': 'Bot ' + process.env.TOKEN
        }
      })).json()
)();