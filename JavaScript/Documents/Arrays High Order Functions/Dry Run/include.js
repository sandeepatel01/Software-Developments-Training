// ************************ Check if an array contains a number ****************** 
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(3));  // Output: true
console.log(numbers.includes(6));  // Output: false


// ****************************** Using includes() with a start index *******************
const values = [10, 20, 30, 40, 50];

console.log(values.includes(20, 2)); // Output: false (search starts at index 2)
console.log(values.includes(20, 0)); // Output: true (search starts at index 0)


// **************************** Check if a string contains a substring ************************
const sentence = "Hello, welcome to JavaScript!";

console.log(sentence.includes("welcome"));  // Output: true
console.log(sentence.includes("Python"));   // Output: false


// *************************** Using includes() with case sensitivity ********************
const text = "JavaScript is awesome";

console.log(text.includes("javascript"));  // Output: false (case-sensitive)
console.log(text.includes("JavaScript"));  // Output: true


// *************** Using includes() with Nested Arrays *******************
const nestedArray = [[1, 2], [3, 4]];

console.log(nestedArray.includes([1, 2])); // Output: false (because arrays are reference types)
console.log(nestedArray.some(arr => JSON.stringify(arr) === JSON.stringify([1, 2]))); // Output: true

