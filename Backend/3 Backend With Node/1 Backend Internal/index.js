// const fs = require('fs');

// fs.writeFile('./test.txt', "hello world", () => { });





// console.log({ __filename, __dirname });

// /*
// {
//   __filename: 'E:\\Corporate Training\\Backend\\3 Backend With Node\\1 Backend Internal\\index.js',
//   __dirname: 'E:\\Corporate Training\\Backend\\3 Backend With Node\\1 Backend Internal'
// }
//   */


// const path = require('path');
// console.log(path.basename(__filename)); // Output: index.js


// const path = require('path');
// const filePath = path.join(__dirname, 'test.txt');
// console.log(filePath);


const math = require('./math');
console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(10, 4)); // Output: 6

// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;