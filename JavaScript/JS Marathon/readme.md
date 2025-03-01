## Variables and Datatypes

---

### Variables

**Variables are Containers for Storing Data**

JavaScript Variables can be declared in 4 ways:

- Automatically
- Using `var`
- Using `let`
- Using `const`

```jsx
var name = "Sandy"; // Not Recommended - 1995 to 2015.
let name1 = "Sandy"; // Recommended
const pi = 3.14; // Recommended
```

```jsx
// Automatically
x = 5;
y = 6;
z = x + y;
```

### `var`

- Can be **redeclared** and **updated**.
- **Function-scoped.**

```jsx
var name = "John";
var name = "Doe"; // Redeclaration is allowed
console.log(name); // Output: Doe

function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Accessible here (not block-scoped)
}
test();
```

### `let`

- Can be **updated**, but **not redeclared** in the same scope.
- **Block-scoped** → exists only inside `{}` .

```jsx
let age = 25;
age = 30; // Allowed

if (true) {
  let age = 35; // This is a new variable (block-scoped)
  console.log(age); // Output: 35
}
console.log(age); // Output: 30
```

### `const`

- **Cannot be updated or redeclared**.
- **Block-scoped and Constant**.

```jsx
const PI = 3.1416;
// PI = 3.15;  // Error: Assignment to constant variable

const user = { name: "Alice" };
user.name = "Bob"; // Allowed (modifying properties)
console.log(user); // Output: { name: "Bob" }
```

### Variable Hoisting

Hoisting moves declarations to the top.

```jsx
// only initializes var with undefined.
console.log(x); // undefined (hoisted)
var x = 10;

console.log(y); // ReferenceError (not hoisted)
let y = 20;
```

## Datatypes

1. Primitive Data Types (Immutable)
2. Non-Primitive (Reference) Data Types

### Primitive Data Types

1. Number → Representing Integers and Floating-Point number.

```jsx
let number = 10; // Number
let price = 99.99;
```

1. String → Represents a sequence of characters.

```jsx
let text = "Hello"; // String
let templateLiteral = `My name is ${name}`;
```

1. Boolean → Represents `true` or `false`.

```jsx
let isAdmin = true;
let isLoggedIn = false;
```

1. Undefined → A variable that has been declared but not assigned a value.

```jsx
let undefiendVar = undefined; // Undefined
console.log(typeof undefiendVar); // undefined

let x;
console.log(x); // undefined
```

1. Null

```jsx
let nothing = null; // Object - (historical bug)
console.log(typeof nothing); // object
```

1. Symbol → Used to create unique identifiers.

```jsx
let symbolVar = Symbol(); // Symbol
console.log(typeof symbolVar); // symbol

let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false (Symbols are always unique)
```

### Reference Data Types

1. Object → A collection of key-value pairs.

```jsx
let person = {
  name: "Sandy",
  age: 20,
  isWorkingProfessional: true,
};

console.log(typeof {}); // "object"
```

1. Array → A special type of object that holds indexed values.

```jsx
let numbers = [1, 2, 3, 4, 5];

console.log(typeof []); // "object"
```

1. Function → Functions in JavaScript are objects and can be assigned to variables.

```jsx
function greet() {
  console.log("Hello!");
}

let sayHello = function () {
  console.log("Hi!");
};

console.log(typeof function () {}); // "function"
```

## Data Type Conversion

### Convert to Number

```jsx
let num = "10";

// Explicit Type Conversion (Manual)
let convertedNum = Number(num); // Recommended

// Implicit Type Conversion (Type Coercion)
let convertedNum = +num;

// Convert Using parseInt()
let convertedNum = parseInt(num);

console.log(convertedNum); // 10
console.log(typeof convertedNum); // number
```

### Convert to String

```jsx
let str = 10;

// Explicit Type Conversion (Manual)
let convertedStr = String(str); // Recommended

// Explicit Type Conversion (Manual)
let convertedStr = str.toString();

console.log(convertedStr); // "10"
console.log(typeof convertedStr); // string
```

```jsx
// Implicit Type Conversion (Type Coercion)

// String Conversion
console.log("5" + 2); // "52" (number converted to string)
console.log("5" + true); // "5true" (boolean converted to string)
console.log(5 + "5"); // "55"

// Number Conversion
console.log("5" - 2); // 3 (string converted to number)
console.log("5" * "2"); // 10 (both converted to numbers)
console.log("5" / "2"); // 2.5
console.log("5" - true); // 4 (true → 1)
console.log("5" - false); // 5 (false → 0)
console.log("hello" - 2); // NaN (invalid number)
```

```jsx
// Explicit Type Conversion (Manual)

// Convert to String
let num = 100;
console.log(String(num)); // "100"
console.log(num.toString()); // "100"
console.log(String(true)); // "true"

// Convert to Number
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Convert to Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
```

## **Special Cases in Type Conversion**

| Expression      | Result | Explanation                |
| --------------- | ------ | -------------------------- |
| `"5" + 2`       | `"52"` | String concatenation       |
| `"5" - 2`       | `3`    | String converted to number |
| `"5" * "2"`     | `10`   | Both converted to numbers  |
| `true + 2`      | `3`    | `true` → `1`               |
| `false + 2`     | `2`    | `false` → `0`              |
| `null + 5`      | `5`    | `null` → `0`               |
| `undefined + 5` | `NaN`  | `undefined` → `NaN`        |

## Operators in JavaScript

### Arithmetic Operators

Used for mathematical calculations.

```jsx
let a = 10;
let b = 20;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b; // Modulus
let power = a ** b;

console.log(sum); // 30
console.log(difference); // -10
console.log(product); // 200
console.log(quotient); // 0.5
console.log(remainder); // 10
console.log(power); // 100000
```

### Comparison Operators

Used to compare two values.

- `*==*` (Equal to)  - Checks only data.
- `*===*` (Strict equal to) - Checks data and data type.
- `!=` (Not equal to).
- `>` (Greater than).
- `<` (Less than).
- `>=` (Greater than or equal to).
- `<=` (Less than or equal to).

```jsx
let x = 10;
let y = 10;

console.log(x == y); // true
console.log(x === y); // true
console.log(x != y); // false
console.log(x > y); // false
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // true
```

### Logical Operators

Used to combine multiple conditions.

| Operator | Description | Example         | Result     |
| -------- | ----------- | --------------- | ---------- | --------------- | ------ |
| `&&`     | Logical AND | `true && false` | `false`    |
| `        |             | `               | Logical OR | `true && false` | `true` |
| `!`      | Logical NOT | `!true`         | `false`    |

```jsx
console.log(true && false); // false
console.log(true || false); // true
console.log(!false); // true
```

### **Bitwise Operators**

1.  **Bitwise AND (`&`)**

    - Compares each bit of two numbers.
    - The result is `1` if both bits are `1`; otherwise, it's `0`.

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/1163cc1b-2e0b-4fcc-b6df-5b06ec3865aa/114d2f85-d5d5-497d-a3a8-fe369559dbd1/image.png)

    ```
    X & 0 = 0
    X & 1 = X
    ```

2.  **Bitwise OR (`|`)**

    - Compares each bit of two numbers.
    - The result is `1` if at least one of the bits is `1`; otherwise, it's `0`.

    ```
    X | 0 = X
    X | 1 = 1
    ```

3.  **Bitwise XOR (`^`)**

    - Compares each bit of two numbers.
    - The result is `1` if the bits are different; otherwise, it's `0`.

    ```
    X ^ 0 = X
    X ^ 1 = ~X
    X ^ X = 0
    ```

4.  **Bitwise NOT (`~`) - Negation [ 1’s compliment ]**

    - Inverts all bits (`1` becomes `0`, and `0` becomes `1`).

    ```
    ~0 = 1
    ~1 = 0
    ```

5.  **Left Shift (`<<`)**

    - Shifts bits to the left, filling with zeros on the right.
    - `x<<n` multiplies x by 2^n.
    - Example:
      `0101<<1 = 1010`

6.  **Right Shift (`>>`)**

        **New bits are always  is independent of msb**

- Shifts bits to the right, filling with zeros (logical shift) or the sign bit (arithmetic shift).
- `x>>n` divides x by 2^n.
- Example: `0101>>1 = 0010`

### Triple right shift (`>>>`)

## Module in JS

```jsx
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10

console.log(Math.random()); // 0 to 1 - return random number
console.log(Math.random() * 10); // 0 to 10
```

## Strings

Strings are useful for holding data that can be represented in text form.

String is a sequence of characters enclosed in

- Single quotes (`''`)
- Double quotes (`""`)
- Backticks (````)

```jsx
let str1 = "Hello"; // Single quotes
let str2 = "World"; // Double quotes
let str3 = `JavaScript`; // Template literal (ES6) - Backticks
```

### Strings Creation

1. String Literals

```jsx
let message = "Hello, JavaScript!";

console.log(message.indexOf("JavaScript")); // 7
console.log(message.indexOf("Hello")); // 0
console.log(message.indexOf("!")); // 17
console.log(typeof message); // string
```

1. The `String` Constructor

```jsx
let strObj = new String("Hello"); // Creates a String object
console.log(typeof strObj); // object
```

### String Methods

1. Length → Properties

```jsx
let text = "Hello World";
console.log(text.length); // 11
```

1. Accessing Characters in a string

```jsx
let text = "Hello World";

console.log(text[0]); // 'H'
console.log(text.charAt(1)); // 'e'
```

1. Changing Case in a string

```jsx
let text = "Hello World";

console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"
```

1. Finding Substrings in a string

```jsx
let text = "Hello World";

console.log(text.indexOf("World")); // 6 (first occurrence)
console.log(text.lastIndexOf("o")); // 7 (last occurrence)
console.log(text.includes("Hello")); // true
console.log(text.startsWith("Hell")); // true
console.log(text.endsWith("World")); // true
```

1. Extracting Substrings in a string

```jsx
let text = "Hello World";

console.log(text.slice(0, 5)); // "Hello" (start, end)
console.log(text.substring(6, 11)); // "World" (start, end)
console.log(text.substr(6, 5)); // "World" (start, length)
```

1. Replacing

```jsx
let str = "  JavaScript is great!";

console.log(str); // "  JavaScript is great!"
console.log(str.replace("great", "awesome")); // "JavaScript is awesome!"
```

1. Trimming

```jsx
let str = "  JavaScript is great!  ";

console.log(str.trim()); // "JavaScript is great!" (removes spaces)
console.log(str.trimStart()); // "JavaScript is great!  "
console.log(str.trimEnd()); // "  JavaScript is great!"
```

1. Splitting → The `split()` method divides a string into an array based on a **separator**.

```jsx
// string.split(separator, limit)

let text = "Hello World! JavaScript is awesome.";
let words = text.split(" ");

console.log(text); // "Hello World! JavaScript is awesome."
console.log(words); // ["Hello", "World!", "JavaScript", "is", "awesome."]

// Splitting with a Limit
let text = "red-blue-green-yellow";
let colors = text.split("-", 2);
console.log(colors); // Output: [ 'red', 'blue' ]

// Splitting a String by Comma
let data = "apple,banana,grape,orange";
let fruits = data.split(",");
console.log(fruits); // Output: [ 'apple', 'banana', 'grape', 'orange' ]

// Splitting Each Character
let word = "JavaScript";
let letters = word.split("");
console.log(letters); // Output: [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]
```

1. Joining [String Concatenation ]

```jsx
let words = "apple,banana,orange";
let joinedStr = words
  .split(",") // Convert string to an array - ["apple", "banana", "orange"]
  .join(" - ");

console.log(joinedStr); // "apple - banana - orange"
```

1. Repeating Strings

```jsx
console.log("Ha".repeat(3)); // "HaHaHa"
```

1. Concatenation

```jsx
// Using + (Concatenation Operator)
let firstName = "Sandeep";
let lastName = "Patel";

let fullName = firstName + " " + lastName; // Concatination
console.log(fullName); // Sandeep Patel

// Using concat() Method
console.log(firstName.concat(" ", lastName)); //Sandeep Patel

// Template Literals
let myName = "Sandy";
let age = 20;

let greeting = `My name is ${myName} and I am ${age} years old.`;
console.log(greeting); // My name is Sandy and I am 20 years old.
```

### Immutable Nature of Strings

Strings in JavaScript are **immutable**, meaning they **cannot be changed** once created.

```jsx
let text = "Hello";
text[0] = "M"; // ❌ Won't change
console.log(text); // "Hello"

// If you want to modify a string, you need to create a new string.

text = text + " World"; // This creates a new string
console.log(text); // Output: "Hello World"

text = "M" + text.slice(1);
console.log(text); // "Mello"
```
