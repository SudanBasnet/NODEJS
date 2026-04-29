//path module
const path = require("path");
const url = "./src/folder/file.txt";
console.log(path.extname(url));
console.log(path.basename(url));
console.log(path.dirname(url));
const dir = path.join("../", "base", url);
const abs = path.resolve("./server.js"); //absolute path
console.log(abs);
console.log(path.relative("./", abs));
console.log(dir);
