// ***************************** Find the first even number *************

const numbers = [1, 3, 7, 8, 10, 15];

const firstEvenNumber = numbers.find(num => num % 2 === 0);
console.log("First Even Number: ", firstEvenNumber);


// ***************************** Find an object in an array ***********************

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Priya" }
];

// const singleUser = users.find((user) => user.name === "Priya");
const singleUser = users.find((user) => user.id === 1);
console.log("Single User: ", singleUser);