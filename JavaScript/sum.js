let myArr = [1, 2, 3, 4, 5];

function sum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + myArr[i];
  }

  return sum;
}

let result = sum(myArr);
console.log(result);