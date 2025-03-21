const person = {
  id: '1',
  firstname: "Sandeep",
  lastname: "Patel",
  techStack: ["HTML", "CSS", "JS"],
  student: true,
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
  address: {
    city: "Pune",
    state: "Maharashtra",
    country: "India"
  }
};

console.log("Person details: ", person);
console.log("Person id: ", person.id);
console.log("Person name: ", person.firstname + " " + person.lastname);
console.log("Person techStack: ", person.techStack);
console.log("Person is student: ", person.student);
console.log("Person full name: ", person.getFullName());
console.log("Person address: ", person.address);