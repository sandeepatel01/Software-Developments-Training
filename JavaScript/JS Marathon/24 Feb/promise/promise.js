const fsv2 = require("fs/promises");

console.log("Started Program");

fsv2
  .readFile("hello.txt", "utf-8")
  .then((content) => fsv2.writeFile("backup.txt", content))
  .then(() => fsv2.unlink("hello.txt"))
  .catch((error) => console.log("Error in reading file: ", error));

console.log("End Program");