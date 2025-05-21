const fs = require("fs");
const http = require("http");

// const crypto = require("crypto");

// setTimeout(() => {
//   console.log("Timer 1 finished");
// }, 0);
// setImmediate(() => {
//   console.log("immediate finished");
// });

// const start = Date.now();
// fs.readFile("test-file.txt", () => {
//   console.log("I/O finished");

//   console.log("--------------------------------");
//   setTimeout(() => {
//     console.log("Timer 2 finished");
//   }, 0);
//   setTimeout(() => {
//     console.log("Timer 3 finished");
//   }, 3000);
//   setImmediate(() => {
//     console.log("immediate 2 finished");
//   });
//   process.nextTick(() => {
//     console.log("nextTick 1");
//     console.log("--------------------------------");
//   });
//   crypto.pbkdf2("password", "salt", 1000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "pbkdf2 finished");
//   });
//   crypto.pbkdf2("password", "salt", 1000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "pbkdf2 finished");
//   });
//   crypto.pbkdf2("password", "salt", 1000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "pbkdf3 finished");
//   });
// });

// console.log("Top level code finished");

//server listen
const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log("request received");
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end("hello world");
});

server.on("request", (req, res) => {
  console.log(req.url);
  console.log("another request received");
});

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to request on port 8000");
});
