const person1 = {
  "First Name": "Sandeep",
  "Last Name": "Patel",
  getFullname: function () {
    if (this["First Name"] !== undefined) return `${this["First Name"]} ${this["Last Name"]}`;

    return this["First Name"];
  }

}

const person2 = {
  "First Name": "Amit",
  "Last Name": "Singh",
  // getFullname: function () {
  //   return `${this["First Name"]} ${this["Last Name"]}`
  // }

};

person2.__proto__ = person1;
// person1.__proto__ = null; 

// DRY principle - Do not repeat yourself

console.log("Person 1: ", person1.getFullname()); // Person 1:  Sandeep Patel
console.log("Person 2: ", person2.getFullname()); // Person 2:  Amit Singh
console.log(person2.toString()); // [object Object]

 