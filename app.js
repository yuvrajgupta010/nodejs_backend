// Global file
const http = require("http");

// Custom file
const routes = require("./routes.js");

const server = http.createServer(routes);

server.listen(3000);
