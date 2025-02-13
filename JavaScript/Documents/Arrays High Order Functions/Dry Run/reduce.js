const numbers = [10, 20, 50, 30, 40];

//  *********  Return Sum of numbers in a array ***********

const sumofArrNumbers = numbers.reduce((acc, nums) => {
  let sum = acc + nums;
  return sum;
}, 0);

console.log("Numbers of Array: ", numbers);  // Numbers of Array:  [ 10, 20, 50, 30, 40 ]
console.log("Total Sum of numbers in a Array: ", sumofArrNumbers);  // Total Sum of numbers in a Array:  150


// ****************************  Find max numbers in a array **************************

// let maxNumber = numbers.reduce((acc, nums) => Math.max(acc, nums));
let maxNumber = numbers.reduce((acc, nums) => (acc > nums ? acc : nums));
console.log("Max Number: ", maxNumber); // Max Number:  50

let max = numbers[0]; // Assume the first element is the maximum

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]; // Update max if a larger number is found
  }
}

console.log("Using Ieration:", max); // Using Ieration: 50


// ****************************  Flattening an array **************

const nestedArray = [[1, 2], [3, 4], [5, 6]];

// const flateArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
// const flateArray = nestedArray.reduce((acc, arr) => [...acc, ...arr], []);
const flatArray = nestedArray.flat();

console.log("Flat Array: ", flatArray);

let flatedArray = [];

// nestedArray.forEach((subArray) => {
//   for (let i = 0; i < subArray.length; i++) {
//     flatedArray.push(subArray[i]);
//   }
// });

// console.log("Using forEach Flat Array: ", flatedArray);

for (let i = 0; i < nestedArray.length; i++) {
  for (let j = 0; j < nestedArray[i].length; j++) {
    flatedArray.push(nestedArray[i][j])
  }

}

console.log("Using Iterations Flat Array: ", flatedArray);  // Using Iterations Flat Array:  [ 1, 2, 3, 4, 5, 6 ]


// *********************** Counting occurrences of elements in a Array  *************************

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const countOccrrences = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;

  return acc;
}, {});

console.log("Total Occurrence: ", countOccrrences); // Total Occurrence:  { apple: 3, banana: 2, orange: 1 }

let occurrenceCount = [];

for (let i = 0; i < fruits.length; i++) {
  occurrenceCount[fruits[i]] = (occurrenceCount[fruits[i]] || 0) + 1;
}

console.log("Using Iteration Occurence Count: ", occurrenceCount);  // Using Iteration Occurence Count:  [ apple: 3, banana: 2, orange: 1 ]


// **************************** Creating an object from an array ********************

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const userObjects = users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});

console.log("User Objects: ", userObjects);  // User Objects:  { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }

let newUsersObject = {};

for (let i = 0; i < users.length; i++) {
  newUsersObject[users[i].id] = users[i].name;
}

console.log("User Objects Using Iteration: ", newUsersObject);  // User Objects Using Iteration:  { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }
