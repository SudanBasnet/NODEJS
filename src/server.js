//path module
const path = require("path");
// const url = "./src/folder/file.txt";
// console.log(path.extname(url));
// console.log(path.basename(url));
// console.log(path.dirname(url));
// const dir = path.join("../", "base", url);
const abs = path.resolve("./server.js"); //absolute path
// console.log(abs);
// console.log(path.relative("./", abs));
// console.log(dir);
// console.log(path.isabsolute("dir"));

//file system=>fs

const fs = require("fs");
// fs.writeFile("./file.txt", "text file content", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("write file completed");
// });

fs.appendFile("./file.txt", "\ntext file content", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("write file completed");
});
