// ******************** VARIABLES *************************

var name = "Sandy"; // Not Recommended
let name1 = "Sandy"; // Recommended
const pi = 3.14; // Recommended


// *************************** DATA TYPES ***********************

// ****** Primitive Data Types ****
let number = 10; // Number
let text = "Hello"; // String
let isTrue = true; // Boolean 

let nothing = null; // Object  [Null of data type is Null] 
console.log(typeof nothing); // object

let undefiendVar = undefined; // Undefined
console.log(typeof undefiendVar); // undefined

let symbolVar = Symbol(); // Symbol
console.log(typeof symbolVar); // symbol


// ****** Reference Data Types ************

let person = {
  name: "Sandy",
  age: 20,
  isWorkingProfessional: true
}

// ****** Data Type Conversion ************

let num = "10"; // "10abc"
// let convertedNum = Number(num); // Recommended
// let convertedNum = +num;
let convertedNum = parseInt(num);

console.log(convertedNum); // 10,   NaN
console.log(typeof convertedNum); // number


let str = 10;
// let convertedStr = String(str); // Recommended
let convertedStr = str.toString();

console.log(convertedStr); // "10"
console.log(typeof convertedStr); // string


// ****** Operators ************

let a = 10;
let b = 20;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

console.log(sum); // 30
console.log(difference); // -10
console.log(product); // 200
console.log(quotient); // 0.5
console.log(remainder); // 10
console.log(power); // 100000


// ****** Comparison **********

let x = 10;
let y = 10;

// == (Equal to)  - Checks only data
// === (Strict equal to) - Checks data and data type
// != (Not equal to)
// > (Greater than)
// < (Less than)
// >= (Greater than or equal to)
// <= (Less than or equal to)

console.log(x == y); // true
console.log(x === y); // true
console.log(x != y); // false
console.log(x > y); // false
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // true


// *********** Module *************

// Math
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10

console.log(Math.random()); // 0 to 1 - return random number
console.log(Math.random() * 10); // 0 to 10


// ********** String Methods *************

let firstName = "Sandeep";
let lastName = "Patel";

let fullName = firstName + " " + lastName; // Concatination
console.log(fullName); // Sandeep Patel

let message = "Hello";

console.log(message.length); // 5
console.log(message.toUpperCase()); // HELLO
console.log(message.toLowerCase()); // hello

console.log(message.indexOf("l")); // 2
console.log(message.slice(0, 3)); // Hel


// ********** Template Literals *************

let myName = "Sandy";
let age = 20;

let greeting = `My name is ${myName} and I am ${age} years old.`;
console.log(greeting); // My name is Sandy and I am 20 years old.

