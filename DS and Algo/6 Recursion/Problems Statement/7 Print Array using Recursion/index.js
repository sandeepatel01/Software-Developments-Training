// Print Array using Recursion
function printArray(arr, index = 0) {
  // base case
  if (index == arr.length) {
    return;
  };

  // Processing
  console.log(arr[index]);

  // recursive case
  printArray(arr, index + 1);
};

// printArray([1, 2, 3, 4, 5]);




// // Print Reverse Array using Recursion
function printReverseArray(arr, index = 0) {
  // base case
  if (index == arr.length) {
    return;
  };

  // recursive case
  printReverseArray(arr, index + 1);

  // Processing
  console.log(arr[index]);
};

printReverseArray([1, 2, 3, 4, 5]);