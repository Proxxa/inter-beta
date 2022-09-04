
const fetch = require('node-fetch');
module.exports = (c, regopts) => {
  console.log(`Deleting ${c.name}`);
      fetch(`${regopts.url}/${c.id}`, {
        method: "DELETE",
        headers: { Authorization: regopts.headers.Authorization }
      });
}