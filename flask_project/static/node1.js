// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(`hello sahil welcome to your first node.js program live server`);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const fs = require("fs");

let text = fs.readFileSync("hello.txt", "utf-8");
text = text.replace("blank", "demo");
console.log(text);

console.log("Creating new file...");
fs.writeFileSync("sahil.txt", text);