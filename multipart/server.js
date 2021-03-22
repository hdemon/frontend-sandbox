const http = require("http");

const server = http
  .createServer((req, res) => {
    console.log(req);
    // リクエストのURLやHTTPメソッドに応じて適切なレスポンスを返す
    if (req.url === "/upload") {
      if (req.method === "POST") {
        res.setHeader("Content-Type", "text/plain");
        return res.end("good");
      }
    }
  })
  .listen(3000); // 3000ポートでリクエストを待機
