// function printArrToDigits(arr, index = 0, num = 0) {

//   // base case
//   if (index == arr.length) {
//     return num;
//   }

//   num = num * 10 + arr[index];
//   return printArrToDigits(arr, index + 1, num);
// };

// let arr = [3, 4, 7, 8, 10, 13];
// console.log(printArrToDigits(arr)); // Output: 347913

function printArrToDigits(arr, index = 0, result = "") {
  // Base case
  if (index === arr.length) {
    return parseInt(result, 10); // Convert final string to number
  }

  // Concatenate current number as a string
  result = result + arr[index].toString();

  return printArrToDigits(arr, index + 1, result);
}

let arr = [3, 4, 7, 8, 10, 13];
console.log(printArrToDigits(arr)); // Output: 34781013




