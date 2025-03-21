// Find minimum number in an array unsing Recursion
function findMin(arr, index = 0) {
  let endIndex = arr.length - 1; // size = arr.length-1 = 2
  // base case
  if (index === endIndex) {
    return arr[index];
  }

  // recursive case
  let min = findMin(arr, index + 1);
  if (arr[index] < min) {
    return arr[index];
  }
  return min;
};

let arr = [-5, 0, -2];
console.log(findMin(arr));


// Find maximum number in an array unsing Recursion
function findMax(arr, index = 0) {
  let endIndex = arr.length - 1; // size = arr.length-1 = 2
  // base case
  if (index === endIndex) {
    return arr[index];
  }

  // recursive case
  let max = findMax(arr, index + 1);
  if (arr[index] > max) {
    return arr[index];
  }
  return max;
};

let arr2 = [4, 2, 8, 1, 6];
console.log(findMax(arr2));