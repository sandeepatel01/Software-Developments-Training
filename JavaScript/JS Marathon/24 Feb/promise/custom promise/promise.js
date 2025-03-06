const fs = require("fs");

// ----------------------------- Legacy Code Wrapper ----------------------
function readFileWithPromise(filepath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (error, content) => {
      if (error) {
        reject(error); // Rejected - call catch()
      } else {
        resolve(content); // Fulfilled - call then()
      }
    })
  })
};

function writeFileWithPromise(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, (error) => {
      if (error) {
        reject(error); // Rejected - call catch()
      } else {
        resolve(); // Fulfilled - call then()
      }
    })
  })
};

function unlinkWithPromise(filepath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filepath, (error) => {
      if (error) {
        reject(error); // Rejected - call catch()
      } else {
        resolve(); // Fulfilled - call then()
      }
    })
  })
};

readFileWithPromise("hello.txt", "utf-8")
  .then((content) => writeFileWithPromise("backup.txt", content))
  .then(() => unlinkWithPromise("hello.txt"))
  .catch((error) => console.log("Error in reading file: ", error))
  .finally(() => console.log("End Program"));