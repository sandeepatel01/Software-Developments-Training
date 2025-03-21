Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`);
}

function cal() { }

function greet(name) {    // name - parameter OR placeholder
  return `Hello ${name}`
}

greet.describe("Sandy"); // "Sandy" - Argument
cal.describe();


function add(num1, num2) {   // Function Delcaration
  return num1 + num2;
}

const subtraction = function (num1, num2) {  // Function Expression
  return num1 - num2;
}

const multiply = (num1, num2) => num1 * num2;  // Arrow Function

function applyOperation(num1, num2, operation) {  // First class function
  return operation(num1, num2);
}

const result = applyOperation(10, 2, (x, y) => x / y)
console.log("Result: ", result);

function createCounter() {  // Clouser
  let count = 0;

  return function () {
    count++;
    return count;
  }
}
const counter = createCounter();
console.log(counter());

(function () {  // IIF
  console.log("Sandy");
})();