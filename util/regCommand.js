const fetch = require('node-fetch'),
  bodify = c => JSON.stringify({ name: c.name, type: c.type, description: c.desc, options: c.options });
module.exports = async (c, regopts) => {
  console.log(`Registering ${c.name}`);
      const res = await fetch(`${regopts.url}`, {
        method: "POST",
        body: bodify(c),
        headers: regopts.headers
      });
}