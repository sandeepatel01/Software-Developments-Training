function printDigits(num) {

  // base case
  if (num === 0) {
    return;
  }

  // Processing
  let digit = num % 10;
  // Update num using Math.floor
  num = Math.floor(num / 10);

  // recursive case
  printDigits(num);

  // Processing
  console.log(digit);

};


printDigits(123456789);




function getDigits(num, arr = []) {
  // Base case
  if (num === 0) {
    return arr;
  }

  // Extract last digit
  let digit = num % 10;

  // Recursive call
  getDigits(Math.floor(num / 10), arr);
 
  // Push the digit into the array
  arr.push(digit);

  return arr;
}


const digits = getDigits(123456789);
console.log(digits); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
