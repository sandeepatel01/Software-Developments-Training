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

// Multiple Asynchronous code in running in Synchronous fashion

//----------- Syntax Sugar --------------------

function wait(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), seconds * 1000);
  })
}

async function doTask() {
  try {
    const fileContent = await readFileWithPromise("hello.txt", "utf-8")
    await writeFileWithPromise("backup.txt", fileContent);
    await wait(10);
    await unlinkWithPromise("hello.txt");
  } catch (error) {
    console.log("Error in reading file: ", error);
  } finally {
    console.log("Async Task Completed");
  }
}

doTask()
  .then(() => console.log("All Done ✅"))
  .catch((error) => console.log("Error in reading file❌: ", error));