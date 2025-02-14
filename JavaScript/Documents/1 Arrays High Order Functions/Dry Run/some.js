// Returns true if at least one element satisfies the condition.


// *******************************  Check if an array has an even number ******************
const numbers = [1, 3, 5, 7, 8];

const hasEven = numbers.some((num) => num % 2 == 0);
console.log(hasEven);  //  Output: true (because 8 is even)


// *************************** Check if a list of users includes an admin ****************
const users = [
  { name: "Alice", role: "user" },
  { name: "Bob", role: "editor" },
  { name: "Charlie", role: "admin" }
];

const hasAdmin = users.some((user) => user.role === "admin");
console.log(hasAdmin);  // Output: true



// *********************************  Check if a string array contains a specific word: mango ***********************
const words = ["apple", "banana", "grape"];

const containsMango = words.some((word) => word === "mango");
console.log(containsMango);  //  // Output: false