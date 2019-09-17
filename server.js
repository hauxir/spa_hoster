const express = require("express");
const app = express();

app.use(function(req, res, next) {
  var ip =
    (req.headers["x-forwarded-for"] || "").split(",").pop() ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  console.log([new Date().toISOString(), ip, req.originalUrl].join(" - "));
  next();
}, express.static("/www/"));

app.use(function(req, res) {
  res.sendFile("/www/index.html");
});

app.listen(8000);
