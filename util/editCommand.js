const fetch = require('node-fetch'),
  bodify = c => JSON.stringify({ name: c.name, type: c.type, description: c.desc, options: c.options });
module.exports = async (c, regopts, id) => {
      console.log(`Altering ${c.name} (Already Registered)`);
      const res = await fetch(`${regopts.url}/${id}`, {
        method: 'PATCH',
        body: bodify(c),
        headers: regopts.headers
      });
}