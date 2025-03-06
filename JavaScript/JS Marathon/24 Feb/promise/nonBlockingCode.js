// console.log("Started Program");

// sum(10, 20, function (result) {
//   console.log("Result: ", result);
// });

// console.log("End Program");

// function sum(num1, num2, callback) {
//   setTimeout(() => {
//     callback(num1 + num2);
//   }, 0);
// }

// // Started Program
// // End Program
// // Result:  30


const fs = require("fs");

console.log("Started Program");

// 1. Read the contents of file from hello.txt
fs.readFile("hello.txt", "utf-8", function (error, content) {
  if (error) {
    console.log("Error in reading file: ", error);
  } else {
    console.log("File Content: ", content);

    // 2. Then create a new file named as backup.txt
    // 3. Copy the contents of hello file to backup file
    fs.writeFile("backup.txt", content, function (error) {
      if (error) {
        console.log("Error in writing file: ", error);
      } else {
        // 4. Delete the hello.txt
        fs.unlink("hello.txt", function (error) {
          if (error) {
            console.log("Error in deleting file: ", error);
          } else {
            console.log("File deleted successfully");
          }
        })
      }
    })
  }
});

console.log("End Program");






