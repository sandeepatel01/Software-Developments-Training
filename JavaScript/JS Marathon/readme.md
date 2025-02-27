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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/1163cc1b-2e0b-4fcc-b6df-5b06ec3865aa/fd2b5a5a-46bc-4086-a557-e3450557141f/image.png)

    ```
    X | 0 = X
    X | 1 = 1
    ```

3.  **Bitwise XOR (`^`)**

    - Compares each bit of two numbers.
    - The result is `1` if the bits are different; otherwise, it's `0`.

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/1163cc1b-2e0b-4fcc-b6df-5b06ec3865aa/958a7561-5af8-4d31-b057-e070fda2ed1c/image.png)

    ```
    X ^ 0 = X
    X ^ 1 = ~X
    X ^ X = 0
    ```

4.  **Bitwise NOT (`~`) - Negation [ 1’s compliment ]**

    - Inverts all bits (`1` becomes `0`, and `0` becomes `1`).

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/1163cc1b-2e0b-4fcc-b6df-5b06ec3865aa/a8707153-8143-4979-891f-4f631f9692d9/image.png)

    ```
    ~0 = 1
    ~1 = 0
    ```

5.  **Left Shift (`<<`)**
    - Shifts bits to the left, filling with zeros on the right.
    - `x<<n` multiplies x by 2^n.
    - Example:
                   `0101<<1 = 1010`
      ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/1163cc1b-2e0b-4fcc-b6df-5b06ec3865aa/88acd478-f5d1-4705-869d-b53614c733ea/image.png)
      ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/1163cc1b-2e0b-4fcc-b6df-5b06ec3865aa/e3f8f6fc-df26-4a3f-a4b9-86a29ffa4f50/image.png)
6.  **Right Shift (`>>`)**

        **New bits are always  is independent of msb**

- Shifts bits to the right, filling with zeros (logical shift) or the sign bit (arithmetic shift).
- `x>>n` divides x by 2^n.
- Example: `0101>>1 = 0010`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/1163cc1b-2e0b-4fcc-b6df-5b06ec3865aa/617bd7bd-1097-4b33-ae44-6653622b1d8d/image.png)

### Triple right shift (`>>>`)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/1163cc1b-2e0b-4fcc-b6df-5b06ec3865aa/7e97db0f-eb87-43f5-8722-0d25b9a5c22b/image.png)
