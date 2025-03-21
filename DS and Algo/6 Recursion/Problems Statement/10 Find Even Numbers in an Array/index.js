// Find even numbers in an array using Recursion
function findEvenNums(arr, index = 0) {

  // base case
  if (index >= arr.length) { // size = arr.length = 10
    return [];
  }

  // recursive case
  let result = findEvenNums(arr, index + 1);

  // Processing
  if (arr[index] % 2 === 0) {
    return [arr[index], ...result];
  };

  return result;

};

let arr = [1, 3, 5, 7];
console.log(findEvenNums(arr));


// Find odd numbers in an array using Recursion
function findOddNums(arr2, index = 0) {

  // base case
  if (index >= arr2.length) { // size = arr.length = 10
    return [];
  }

  // recursive case
  let result = findOddNums(arr2, index + 1);

  // Processing
  if (arr2[index] % 2 !== 0) {
    return [arr2[index], ...result];
  };

  return result;

};

let arr2 = [3, 4, 7, 8, 10, 13];
console.log(findOddNums(arr2));