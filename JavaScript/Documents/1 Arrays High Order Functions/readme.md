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

## Arrays High Order Functions

### forEach

forEach() is used to iterate over an array and execute a function for each element.

- forEach() does not return anything (undefined).
- It modifies the original array.

Syntax

```jsx
array.forEach(callback(element, index, array), thisArg);
```

callback → Function to execute on each element.

- element → The current element being processed.
- index (optional) → The index of the current element.
- array (optional) → The original array.

thisArg (optional) → Value to use as this inside the callback.

```jsx
// Arrays High Order Functions - forEach
const superHeroes = ["Batman", "Superman", "Flash", "Aquaman"];

function printHeros(hero) {
  console.log(hero);
}

// forEach is accepting a callback
superHeroes.forEach(printHeros); // printHeros is a callback function
```

### map

forEach vs map - map returns a new array but forEach doesn't

- map() does not modify the original array

Syntax

```
array.map(callback(element, index, array), thisArg);
```

```jsx
const numbers = [1, 2, 3, 4, 5];

function doubleNumber(num) {
  return num * 2;
}

// map returns a new array and not changing the original array
const doubleNumbers = numbers.map(doubleNumber); // map is accepting a callback
console.log(doubleNumbers);
```

### find

find() is a method used on arrays to return the first element that satisfies a given condition.

- find() returns only the first matching element.
- If no element matches, it returns undefined.
- Not return Array
- It does not modify the original array.

Syntax

```
array.find(callback(element, index, array), thisArg);
```

callback → Function to test each element.

- element → The current element being processed.
- index (optional) → The index of the current element.
- array (optional) → The original array.

thisArg (optional) → Value to use as this inside the callback.

```jsx
const numbers = [1, 2, 3, 4, 5];

function findNumber(num) {
  return num > 3;
}

const findNumberResult = numbers.find(findNumber); // find is accepting a callback
console.log(findNumberResult);
```

### filter

- filter returns a new array and not changing the original array with elements that satisfy a given condition.
  Syntax

```jsx
const newArray = array.filter(callback(element, index, array), thisArg);
```

- callback → Function that runs on each element.
- element → Current element being processed.
- index (optional) → Index of the current element.
- array (optional) → The original array being filtered.
- thisArg (optional) → Value to use as this inside the callback.

```jsx
const numbers = [1, 2, 3, 4, 5];

function findEvenNumber(num) {
  return num % 2 === 0;
}

const findEvenNumberResult = numbers.filter(findEvenNumber); // filter is accepting a callback
console.log(findEvenNumberResult);
```

### reduce

- reduce returns a single value and not changing the original array.
- It is commonly used for summation, product calculation, flattening arrays, and more

```
array.reduce(callback, initialValue[Optional])
```

callback(accumulator, currentValue, index, array)

- accumulator → Holds the accumulated result.
- currentValue → The current element being processed.
- index (optional) → The index of currentValue.
- array (optional) → The original array.

InitialValue (optional) - The initial value of the accumulator. If not provided, the first element of the array is used

Syntax

```jsx
const numbers = [1, 2, 3, 4, 5];

function addTwoNumber(num1, num2) {
  return num1 + num2;
}

const addTwoNumberResult = numbers.reduce(addTwoNumber); // reduce is accepting a callback
console.log(addTwoNumberResult);
```

### slice

- The slice() method is used to extract a portion of an array without modifying the original array.
- slice returns a new array and not changing the original array.

Syntax

```
array.slice(start[Optional], end[Optional])
```

```jsx
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// slice is returning a smaller part of the original array
const citrus = fruits.slice(1, 3 + 1); // slice is not iclude end index
console.log(citrus);
```

OUTPUT:

```
["Orange", "Lemon"]
```

```jsx
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// Extracting a portion of an array

const newFruits = fruits.slice(2, 4); // Extracts elements from index 2 to 3 (4 is not included)
console.log("Original: ", fruits); // Original:  [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
console.log("Updated: ", newFruits); // Updated:  [ 'Lemon', 'Apple' ]

// Copying an array

const copyFruits = fruits.slice(); // Copies the entire array
console.log("Copied Fruits: ", copyFruits); // Copied Fruits:  [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]

// Extracting elements from the end

const lastTwoFruits = copyFruits.slice(-2); // Extracts last two elements
console.log("Last two Fruits: ", lastTwoFruits); // Last two Fruits:  [ 'Apple', 'Mango' ]

// Extracting without an end index

const fromIndex2 = fruits.slice(2); // Extracts from index 2 to the end
console.log("All Fruits from index 2: ", fromIndex2); // All Fruits from index 2:  [ 'Lemon', 'Apple', 'Mango' ]

console.log("Original 😎: ", fruits); // Original 😎:  [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
```

### splice

- The splice() method is used to add, remove, or replace elements in an array.
- It modifies the original array and returns a new array of removed elements.

Syntax

```

array.splice(start, deleteCount[Optional], item1, item2, ..., itemN[Optional])

```

```jsx
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// splice is removing elements from the original array
const citrus = fruits.splice(1, 3); // splice is include end index
console.log(citrus);
console.log(fruits);
```

OUTPUT:

```
[ 'Orange', 'Lemon', 'Apple' ]
[ 'Banana', 'Mango' ]
```

### Some

The some() method is used on arrays to check if at least one element in the array satisfies a given condition.

- It returns true if at least one element passes the test; otherwise, it returns false.
- Returns true if at least one element satisfies the condition.
- If some() is called on an empty array, it always returns false because there are no elements to check.

Syntax

```
array.some(callback(element, index, array), thisArg);
```

### every

The every() method is used to check if all elements in an array satisfy a given condition. If all elements pass the test, it returns true; otherwise, it returns false.

- Returns true only if all elements satisfy the condition.
- It return true only if all elements pass the test, otherwise false.
- If every() is called on an empty array, it always returns true because there are no elements to check.

Syntax

```
array.every(callback(element, index, array), thisArg);
```

### include

The includes() method is used to check whether an array or string contains a specific value. It returns true if the value is found, otherwise false.

Syntax

```
array.includes(value, startIndex[Optional]);
string.includes(value, startIndex[Optional]);

```

### sort

The sort() method is used to sort the elements of an array in place (modifying the original array) and returns the sorted array.

- Default sorting works for strings but not for numbers.
- Use a compare function to correctly sort numbers.
- modifying the original array

Syntax

```
array.sort(compareFunction);
```

compareFunction (optional) → Defines the sorting order.

1. Default Sorting (Lexicographic Order)

```jsx
// Sorting works fine for strings but not for numbers.

const fruits = ["banana", "apple", "cherry"];
console.log(fruits.sort()); // Output: ["apple", "banana", "cherry"]

const numbers = [10, 5, 30, 2];
console.log(numbers.sort()); // Output: [10, 2, 30, 5] ❌ (incorrect for numbers)
```

2. Sorting Numbers (Using a Compare Function)

```jsx
// To correctly sort numbers, use a compare function:

const numbers = [10, 5, 30, 2];

// Ascending order (small to large)
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [2, 5, 10, 30]

// Descending order (large to small)
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [30, 10, 5, 2]
```

3. Sorting Objects (by Property)

```jsx
// Useful when sorting an array of objects:

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 30 },
];

// Sort by age (ascending)
users.sort((a, b) => a.age - b.age);
console.log(users);

/* Output:
[
  { name: "Bob", age: 22 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 30 }
]
*/
```

4. Sorting Strings with Different Cases

```jsx
// Use localeCompare() to handle case-insensitive sorting:
const names = ["Zebra", "apple", "Orange", "banana"];

names.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
console.log(names); // Output: ["apple", "banana", "Orange", "Zebra"]
```

### **JavaScript Array Methods Cheat Sheet with Problems & Use Cases**

| Method           | Use Case 📌                                                                         | Example Problem 🤔                                                |
| ---------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **`map()`**      | When you need to **transform** each element in an array and create a new array.     | Given an array of prices `[100, 200, 300]`, increase each by 10%. |
| **`filter()`**   | When you need to **extract** specific elements based on a condition.                | From `[10, 15, 20, 25]`, return only even numbers.                |
| **`reduce()`**   | When you need to **combine** all elements into a single value (sum, product, etc.). | Calculate the sum of `[1, 2, 3, 4]`.                              |
| **`forEach()`**  | When you need to **iterate** over an array without creating a new one.              | Given an array of strings, print each one to the console.         |
| **`find()`**     | When you need to find the **first element** that satisfies a condition.             | Find the first number greater than `10` in `[5, 12, 8, 130]`.     |
| **`some()`**     | When you need to check if **at least one** element meets a condition.               | Check if any number in `[3, 5, 8]` is greater than `6`.           |
| **`every()`**    | When you need to check if **all elements** satisfy a condition.                     | Check if all numbers in `[2, 4, 6]` are even.                     |
| **`includes()`** | When you need to check if a **specific value exists** in an array.                  | Check if `"banana"` exists in `['apple', 'banana', 'mango']`.     |
| **`sort()`**     | When you need to **sort elements** in ascending or descending order.                | Sort `[4, 2, 8, 1]` in ascending order.                           |
| **`slice()`**    | When you need to **extract a portion** of an array without modifying the original.  | Extract `[2, 3, 4]` from `[1, 2, 3, 4, 5]`.                       |
