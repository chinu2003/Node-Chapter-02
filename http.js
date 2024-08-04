const http = require("http");

const server = http.createServer(function (req, res) {
  res.end("Hello world Good night");
});

server.listen(3000);
