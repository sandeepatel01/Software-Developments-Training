let name = "Sandy"  // String - "", '', ``
let age = 23  // Number - 23, 23.9
let isPaid = true // Boolean - true, false
let favouriteClass = null
let homeTown;

let skills = ["HTML", "CSS", "JS"] // Array

let studentProfile = {  // Object
  name: "Sandy",
  age: 23,
  isPaid: true,
  favouriteClass: null,
  homeTown: "Delhi",
  skills: ["HTML", "CSS", "JS"],
  address: {
    city: "Delhi",
    state: "Delhi"
  }
}

console.table([name, age, isPaid, favouriteClass, homeTown]);
console.log(studentProfile);

console.log(typeof studentProfile);
console.log(typeof skills);