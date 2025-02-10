// Find Sum from n to 1

function findSum(n) {
  if (n === 1) {
    return 1;
  };

  let sum = n + findSum(n - 1);

  return sum;
};

console.log(findSum(5));