const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3001;

const server = http.createServer((req, res) => {
  console.log(req);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  const dest = fs.createWriteStream("uploaded", "utf8");
  req.on("data", (chunk) => dest.write(chunk));
  req.on("end", () => dest.end());

  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
