const fs = require("fs");

console.log("Started Program");

fs.readFile("hello.txt", "utf-8", function (error, content) {
  if (error) {
    console.log("Error in reading file: ", error);
  } else {
    console.log("File Content: ", content);
  }
});

console.log("End Program");



// 1. Read the contents of file from hello.txt
// 2. Then create a new file named as backup.txt
// 3. Copy the contents of hello file to backup file
// 4. Delete the hello.txt