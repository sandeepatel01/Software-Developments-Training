// Search element in Array using Recursion

function searchElement(arr, target, index = 0) {
  // base case
  if (index >= arr.length) {
    return -1;
  }

  // processing
  if (arr[index] === target) {
    return index;
  }

  // recursive case
  return searchElement(arr, target, index + 1);
};

let arr = [1, 3, 5, 7, 9];
console.log(searchElement(arr, 9));