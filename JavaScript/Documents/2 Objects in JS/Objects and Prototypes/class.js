class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;

    console.log(this.getFullName());
  }

  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
}

// Syntax Sugar - Syntactical Sugar

const person1 = new Person("Sandeep", "Patel");
const person2 = new Person("Aman", "Singh");

console.log("Person 1: ", person1.getFullName());
console.log("Person 2: ", person2.getFullName());  