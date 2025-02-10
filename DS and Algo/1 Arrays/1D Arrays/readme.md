## 1D Array

---

Array is a homogeneous(same data type) collection of contiguous elements.

Array is a collection of primitive data types.

- List of similar items
- collection of elements
- Data Structure

### **Declaration of Array**

---

```jsx
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
```

### **Initializing Arrays**

---

### **Accessing Array Elements**

---

```jsx
let arr = [1, 2, 3, 4, 5]; // Declaring an array
console.log(arr[0]); // Accessing elements (Output: 1)

arr[2] = 10; // Modifying an element
console.log(arr); // [1, 2, 10, 4, 5]
```

```jsx
// 1. Declaring and Initializing an Array
let a = 5;
console.log("Value of a:", a);
console.log("Type of a:", typeof a);

let arr = new Array(10); // Creates an array of size 10
console.log("Base address of arr:", arr); // JavaScript does not have memory address     access
console.log("Size of arr:", arr.length); // Output: 10

// 2. Initializing Arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 5, 7, 9];
let arr3 = [2, 4]; // JS automatically resizes array
let arr4 = [2, 4, 0, 0, 0]; // Similar to C++ behavior
let arr5 = [2, 4, 6, 8]; // No error, JS dynamically handles array size

// 3. Indexing in Array
let arrIdx = [1, 3, 5, 7, 9];
console.log(arrIdx[0]); // 1
console.log(arrIdx[1]); // 3
console.log(arrIdx[2]); // 5
console.log(arrIdx[3]); // 7
console.log(arrIdx[4]); // 9

// 4. Printing an Array
let arrPrint = [1, 3, 5, 7, 9];
let n = arrPrint.length;
for (let i = 0; i < n; i++) {
  console.log(arrPrint[i]);
}
console.log(arrPrint.join(" ")); // 1 3 5 7 9

// 5. Taking Input in an Array
let arrInput = [];
n = 5;
for (let i = 0; i < n; i++) {
  let value = parseInt(prompt(`Enter value for index ${i}:`));
  arrInput.push(value);
}
console.log("Printing the Array:");
console.log(arrInput.join(" "));

// 6. Checking Size of an Array
let arrSize = [1, 2, 3, 4, 5];
console.log("Size of arr:", arrSize.length); // 5

// 7. Array Methods
let arrMethods = [1, 2, 3, 4, 5];
arrMethods.push(6); // Adds 6 at the end
arrMethods.pop(); // Removes last element
arrMethods.splice(2, 0, 10); // Inserts 10 at index 2
arrMethods.splice(3, 1); // Removes element at index 3
console.log(arrMethods); // [1, 2, 10, 4, 5]
```
