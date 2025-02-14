// ******************* Check if all numbers are positive ******************
const numbers = [2, 4, 6, 8];

const allPositive = numbers.every((num) => num > 0);
console.log(allPositive);  // // Output: true


// ************************* Check if all users are active *****************
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: true },
  { name: "Charlie", active: false }
];

const allActiveUser = users.every((user) => user.active);
console.log(allActiveUser);  // // Output: false (because Charlie is inactive)


// ********************************* Check if all words have more than 3 letters ***************
const words = ["apple", "banana", "grape"];

const allLongWords = words.every((word) => word.length > 3);
console.log(allLongWords);  //  // Output: true