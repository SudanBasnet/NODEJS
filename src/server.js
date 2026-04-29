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

// fs.appendFile("./text.txt", "\ntext file content", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("write file completed");
// });

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });
// console.log(fs.existsSync("./text.txt"));
// if (fs.existsSync("./text.txt")) {
//   fs.unlink("./text.txt", (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("file deleted");
//   });
// } else {
//   console.log("no such file or directory, unlink text.txt");
// }

fs.mkdir("./folder/dir1", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("folder created");
});
