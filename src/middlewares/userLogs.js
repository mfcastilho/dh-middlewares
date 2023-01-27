const fs = require("fs");
const path = require("path");

const userLogs = (req, res, next)=>{
  fs.appendFileSync(path.resolve("src", "logs", "userLogs.txt"),`O usuário acessou a rota:${req.url}\n`);
  next();
}

module.exports = userLogs;