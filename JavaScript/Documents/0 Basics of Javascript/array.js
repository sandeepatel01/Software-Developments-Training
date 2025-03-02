// let teas = ["Masala Chai", "Green Chai", "Black Chai", "Ginger Chai"];

// console.log(teas[0]); // First element - Masala Chai
// console.log(teas[teas.length - 1]); // Last element - Ginger Chai

// teas.push("Lemon Chai"); // Add element to the end of the array
// teas.unshift("Grey Chai"); // Add element to the beginning of the array
// // console.log(teas); // ["Grey Chai", "Masala Chai", "Green Chai", "Black Chai", "Ginger Chai", "Lemon Chai"]

// teas.pop(); // Remove the last element from the array
// teas.shift(); // Remove the first element from the array
// console.log(teas); // ["Masala Chai", "Green Chai", "Black Chai", "Ginger Chai"]

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// // Remove 3 elements from index 1 to 3
// const citrus = fruits.splice(1, 3); // splice is include end index

// // Insert "Kiwi" at index 1
// const addKiwi = fruits.splice(1, 0, "Kiwi");

// console.log(citrus); // [ 'Orange', 'Lemon', 'Apple' ]
// console.log(addKiwi); // []
// console.log(fruits); //  [ 'Banana', 'Kiwi', 'Mango' ]


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// // slice is returning a smaller part of the original array
// const citrus = fruits.slice(1, 3 + 1); // slice is not iclude end index

// console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
// console.log(citrus); // [ 'Orange', 'Lemon', 'Apple' ]



// let teas = ["Masala Chai", "Green Chai", "Black Chai", "Ginger Chai"];

// teas.forEach((chai, index) => {
//   console.log(`${index}: ${chai}`);
// }) // chai - all values of arr

// let numbers = [10, 20, 30, 40, 50];

// // let newArr = numbers.map(value => value * 2);
// // console.log(newArr); // [2, 4, 6, 8, 10]

// // let sum = newArr.reduce((total, value) => total + value);
// // console.log(sum); // 15

// let evenNumbers = numbers.filter(value => value % 2 === 0);
// console.log(evenNumbers); // [10, 20, 30, 40]

// Sorting works fine for strings but not for numbers.

// const fruits = ["banana", "apple", "cherry"];
// console.log(fruits.sort()); // Output: ["apple", "banana", "cherry"]

// const numbers = [10, 5, 30, 2];
// console.log(numbers.sort()); // Output: [10, 2, 30, 5] ❌ (incorrect for numbers)

// let arr = [25, 5, 8, 15, 100];
// arr.sort(); 
// console.log(arr); 
// // Output: [100, 15, 25, 5, 8] (Incorrect for numbers)


let originalArr = [1, 2, 3, 4, 5];
let reversedArr = [...originalArr].reverse();

console.log(reversedArr); // [5, 4, 3, 2, 1]
console.log(originalArr); // [1, 2, 3, 4, 5]
