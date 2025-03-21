// ************************************  Logging each element ***************************

const numbers = [1, 2, 3, 4];

console.log("Before: ", numbers);
numbers.forEach((num) => console.log("Inside: ", num));
console.log("After: ", numbers);


// ************************************ Modifying array elements *************************

numbers.forEach((num, index, arr) => {
  arr[index] = num * 2;
});

// numbers.forEach((num) => num * 2);  // TypeError: undefined is not a function

console.log("Modifying array: ", numbers);  // Modifies the original array


// *********************** Summing values ***********************
let sum = 0;
numbers.forEach((num) => sum += num);
console.log("Sum: ", sum);