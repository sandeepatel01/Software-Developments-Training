// ****************** Doubling numbers *****************

const numbers = [1, 2, 3, 4];

const DoublingNumbers = numbers.map((nums) => nums * 2);
console.log("Doubling numbers: ", DoublingNumbers);  // Doubling numbers:  [ 2, 4, 6, 8 ]


//  **************************** Extracting values: names from an array of objects ******************

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Priya" }
];

const names = users.map(user => user.name);
console.log("Users name: ", names);   // Users name:  [ 'Amit', 'Rahul', 'Priya' ]


// *********************  Converting string case: Upper case *************************

const words = ["hello", "world"];

const uppercaseWord = words.map((word) => word.toUpperCase());
console.log("Uppercase Word: ", uppercaseWord);  // Uppercase Word:  [ 'HELLO', 'WORLD' ]