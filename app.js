const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
    req.p;
  } else if (url === "/message" && req.method === "POST") {
    return fs.writeFile("Message.txt", "Hi message", () => {
      res.statusCode = 301;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});

server.listen(3000);
