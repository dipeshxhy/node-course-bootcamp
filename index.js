const fs = require("fs");

// const hello = "Hello world";
// console.log(hello);

//read file
// const textInput = fs.readFileSync("./txt/file.txt", "utf-8");
// console.log(textInput);

//write file
// const textOutput = `This is a new text file: ${textInput}`;
// fs.writeFileSync("./txt/output.txt", textOutput);
// console.log("File written successfully");

// non-lock
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("Error reading file 💥");
  fs.readFile(`./txt/${data1.trim()}.txt`, "utf-8", (err, data2) => {
    if (err) return console.log("Error reading file 💥");
    fs.writeFile(`./txt/final.txt`, data2, (err) => {
      if (err) return console.log("Error writing file 💥");
      console.log("File written successfully");
    });
  });
});
