(async () => {
  const http = require('node:http'),
    fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args)),
    register = require('./util/regCommand.js'),
    edit = require('./util/editCommand.js'),
    del = require('./util/delCommand.js');

  const commands = require('./util/loadCommands')();

  // Get current commands
  const alreadyRegistered = await require('./util/fetchCommands.js');

  // Tell discord that commands exist
  const regopts = require('./dat/regopts.js');

  for (const c of commands.values()) {
    const existing = alreadyRegistered.find(registered => registered.name == c.name);
    if (existing) edit(c, regopts, existing.id)
    else register(c, regopts);
  }

  const keys = [...commands.keys()];
  for (const c of alreadyRegistered) {
    if (!keys.some(n => n == c.name)) del(c, regopts)
  }


  // Set up webhook (:
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(`"request got" ${req.method} ${url}`);
    if (req.method === "POST") {
      let body = ''
      req.on('data', d => {
        body += d;
      });
      req.on('end', () => {
        req.body = JSON.parse(body);
        req.appid = req.body.application_id;
        req.token = req.body.token;
        const cmd = req.body.data.name;
        console.log(cmd);
        if (req.body.type === 1) return res.end(JSON.stringify({ 'type': 1 }));
        if (commands.has(cmd)) { res.setHeader('Content-Type', 'application/json'); commands.get(cmd).exec(req, res) }
      });

    } else {
      console.log("ping assumed");
      return res.end(JSON.stringify({ 'type': 1 }));
    }
  });


  server.listen();
})();