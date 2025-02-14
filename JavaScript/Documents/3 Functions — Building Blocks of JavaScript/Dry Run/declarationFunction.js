// console.log(greet("Aman")); // Output: Hello, Alice!

function greet(name) {
  return `Hello, ${name}!`;
}

// console.log(greet("Aman Singh")); // Output: Hello, Alice!


// console.log(greetTwo("Sandy")); // Output: ReferenceError: Cannot access 'greetTwo' before initialization

const greetTwo = function (name) {
  return `Hello, ${name}!`;
};

console.log(greetTwo("Sandeep")); // Output: Hello, Sandeep!


// console.log(greetThree("Charlie")); // Output: ReferenceError: Cannot access 'greetThree' before initialization
const greetThree = (name) => `Hello, ${name}!`;

console.log(greetThree("Charlie")); // Output: Hello, Charlie!


(function () {
  console.log("IIFE executed!");
})();  // Output: IIFE executed!


function operate(num1, num2, callback) {
  return callback(num1, num2);
}

const add = (x, y) => x + y;
console.log(operate(5, 3, add)); // Output: 8


// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Output: 120


function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generateNumbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined


function greetFour(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greetFour()); // Output: Hello, Guest!
console.log(greetFour("Sandy")); // Output: Hello, Guest!


function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10


function Counter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(`Count: ${count}`);
    },
    getCount: function () {
      return count;
    }
  };
}

const counter = Counter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
console.log(counter.getCount()); // 2
counter.count = 100; // No effect, count remains private
console.log(counter.getCount()); // 2

counter.decrement() // Count: 1
console.log(counter.getCount());



function memoizedFactorial() {
  let cache = {}; // Private cache

  console.log("cache before factorial: ", cache);
  return function factorial(n) {
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return cache[n];
    }
    console.log("cache after factorial: ", cache);
    console.log("Calculating:", n);
    if (n === 0) return 1;
    console.log("cache before calculation: ", cache);
    cache[n] = n * factorial(n - 1);
    console.log("cache after calculation: ", cache);
    return cache[n];
  };
}

const factorial = memoizedFactorial();
console.log(factorial(5)); // Calculating: 5, 4, 3, 2, 1
console.log(factorial(5)); // Fetching from cache: 5