// ***************** Filter Even Numbers ************

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers in a Array: ", evenNumbers);


// ******************** Filter Objects (Users Age 18 or Above) ***********************
const users = [
  {
    id: "1",
    name: "Sandy",
    age: 23
  },
  {
    id: "2",
    name: "Aman",
    age: 20
  },
  {
    id: "3",
    name: "Amit",
    age: 18
  },
  {
    id: "4",
    name: "Vicky",
    age: 15
  }
]

const adult = users.filter((user) => user.age >= 18);
console.log("Adult: ", adult);


// ***************************** Removing Falsy Values ******************

const mixedArray = [0, 1, false, 2, "", 3, null, "Hello", true];

const truthyValues = mixedArray.filter(Boolean);   // Using Boolean as a callback automatically removes falsy values
console.log("Truthy Values: ", truthyValues);


// *************************************  Filtering Strings That Start With "A" *****************************

const words = ["apple", "banana", "grape", "avocado"];

// const filteredWords = words.filter((word) => word.charAt(0) === "a");
// const filteredWords = words.filter((word) => word[0] === "a");
// const filteredWords = words.filter((word) => word.startsWith("a"));
const filteredWords = words.filter((word) => word.indexOf("a") === 0);
console.log("Filterd Words: ", filteredWords);