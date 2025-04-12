const http = require("node:http"); //◽ denotes importing core module of node

const server = http.createServer(function (req, res) {
  if (req.url === "/dev") {
    res.end("I am SWE !!!");
  }
  res.end("Hello World");
});

const PORT = 3000;

server.listen(PORT);
