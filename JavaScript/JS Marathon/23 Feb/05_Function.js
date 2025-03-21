function greet(name) { // Dynamic function
  console.log(`Hello am ${name}`);
};

console.log("Sandy");
console.log("Sandeep Patel");

let globalVariable = "I am global";

function modifyGlobal() {
  globalVariable = "I am modified";
  let blockScopedVariable = "I am blocked-scoped"
  console.log(blockScopedVariable);
};

modifyGlobal() // I am blocked-scoped
console.log(globalVariable); // I am modified

let config = function () {
  let settings = {
    theme: "dark"
  }

  return settings;
}(); // IIF

// (() => { })(); // IIF


// ******************** call & bind ********************************
let person1 = {
  name: "Sandy",
  greet: function () {
    console.log(`Hello ${this.name}`);  // this - point to current context
  }
}

let person2 = {
  name: "Sandeep Patel"
}

// Change context
person1.greet.call(person2);  // call - hold context

person1.greet.bind(person2); // return new function

const bindgreet = person1.greet.bind(person2); // return new function
console.log(bindgreet);  // [Function: bound greet]
console.log(bindgreet());  // Hello Sandeep Patel
// undefined

person1.greet.call({ name: "Aman" }) // Hello Aman

