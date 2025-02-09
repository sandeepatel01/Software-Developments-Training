# Arrays High Order Functions

---

## High Order & Callback

A function that take a function as an arguments is called High order function.

```jsx
function addTwoNumber(num1, num2, cb) {
  let result = num1 + num2;
  cb(result); // Callback
}

function showResult(result) {
  console.log(result);
}

addTwoNumber(5, 10, showResult); // High Order Function
```

```jsx
function addTwoNumber(num1, num2, cb) {
  let result = num1 + num2;
  cb(result); // Callback

  return function () {
    console.log(result);
  };
}

function showResult(result) {
  console.log(result);
}
let resultFunction = addTwoNumber(5, 10, showResult);
resultFunction();
```

### Arrays High Order Functions

```jsx
// Arrays High Order Functions - forEach
const superHeroes = ["Batman", "Superman", "Flash", "Aquaman"];

function printHeros(hero) {
  console.log(hero);
}

// forEach is accepting a callback
superHeroes.forEach(printHeros); // printHeros is a callback function
```

```jsx
// Arrays High Order Functions - map
// forEach vs map - map returns a new array but forEach doesn't
const numbers = [1, 2, 3, 4, 5];

function doubleNumber(num) {
  return num * 2;
}

// map returns a new array and not changing the original array
const doubleNumbers = numbers.map(doubleNumber); // map is accepting a callback
console.log(doubleNumbers);
```

```jsx
// Arrays High Order Functions - find
const numbers = [1, 2, 3, 4, 5];

function findNumber(num) {
  return num > 3;
}

const findNumberResult = numbers.find(findNumber); // find is accepting a callback
console.log(findNumberResult);
```

```jsx
// Arrays High Order Functions - filter
// filter returns a new array and not changing the original array
const numbers = [1, 2, 3, 4, 5];

function findEvenNumber(num) {
  return num % 2 === 0;
}

const findEvenNumberResult = numbers.filter(findEvenNumber); // filter is accepting a callback
console.log(findEvenNumberResult);
```

```jsx
// Arrays High Order Functions - reduce
// reduce returns a single value and not changing the original array
const numbers = [1, 2, 3, 4, 5];

function addTwoNumber(num1, num2) {
  return num1 + num2;
}

const addTwoNumberResult = numbers.reduce(addTwoNumber); // reduce is accepting a callback
console.log(addTwoNumberResult);
```

```jsx
// Arrays High Order Functions - slice
// slice returns a new array and not changing the original array
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// slice is returning a smaller part of the original array
const citrus = fruits.slice(1, 3 + 1); // slice is not iclude end index
console.log(citrus);
```

```jsx
// Arrays High Order Functions - splice
// splice returns a new array and  modifying the original array
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// splice is removing elements from the original array
const citrus = fruits.splice(1, 3); // splice is include end index
console.log(citrus);
console.log(fruits);
```
