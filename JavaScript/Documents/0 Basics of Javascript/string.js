let message = "Hello, JavaScript!";

// console.log(message.indexOf("JavaScript"));
// console.log(message.indexOf("Hello"));
// console.log(message.indexOf("!"));
// console.log(typeof message);

let strObj = new String("Hello"); // Creates a String object
// console.log(typeof strObj); // object

let str = "  JavaScript is great!";

// console.log(str); // "  JavaScript is great!"
// console.log(str.replace("great", "awesome")); // "JavaScript is awesome!"


// let text = "Hello World! JavaScript is awesome.";
// let words = text.split(" ");

// console.log(text); // "Hello World! JavaScript is awesome."
// console.log(words); // ["Hello", "World!", "JavaScript", "is", "awesome."]

let words = "apple,banana,orange";

let joinedStr = words
  .split(",") // Convert string to an array - ["apple", "banana", "orange"]
  .join(" - ")


// console.log(joinedStr); // "apple - banana - orange"


// Using + (Concatenation Operator)
let firstName = "Sandeep";
let lastName = "Patel";

let fullName = firstName + " " + lastName; // Concatination
console.log(fullName); // Sandeep Patel

// Using concat() Method
console.log(firstName.concat(" ", lastName)); //Sandeep Patel
