const fs = require("fs");
const crypto = require("crypto");

setTimeout(() => {
  console.log("Timer 1 finished");
}, 0);
setImmediate(() => {
  console.log("immediate finished");
});

const start = Date.now();
fs.readFile("test-file.txt", () => {
  console.log("I/O finished");

  console.log("--------------------------------");
  setTimeout(() => {
    console.log("Timer 2 finished");
  }, 0);
  setTimeout(() => {
    console.log("Timer 3 finished");
  }, 3000);
  setImmediate(() => {
    console.log("immediate 2 finished");
  });
  process.nextTick(() => {
    console.log("nextTick 1");
    console.log("--------------------------------");
  });
  crypto.pbkdf2("password", "salt", 1000, 1024, "sha512", () => {
    console.log(Date.now() - start, "pbkdf2 finished");
  });
  crypto.pbkdf2("password", "salt", 1000, 1024, "sha512", () => {
    console.log(Date.now() - start, "pbkdf2 finished");
  });
  crypto.pbkdf2("password", "salt", 1000, 1024, "sha512", () => {
    console.log(Date.now() - start, "pbkdf3 finished");
  });
});

console.log("Top level code finished");
