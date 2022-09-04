const { opendirSync } = require('node:fs')
module.exports = () => {
  const commandMap = new Map();
  const dir = opendirSync('./commands');
  console.log("Loading commands");
  let dirent = dir.readSync();
  while (dirent !== null) {
    const c = require('../commands/' + dirent.name)
    commandMap.set(c.name, c);
    dirent = dir.readSync();
  }
  dir.closeSync();
  return commandMap;
}