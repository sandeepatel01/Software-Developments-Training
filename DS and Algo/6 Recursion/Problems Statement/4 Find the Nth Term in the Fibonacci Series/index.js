// find Nth term in the fibonacci series

function findNthTerm(n) {
  // base case
  if (n === 1 || n === 2) {
    return 1;
  }

  // recursive case
  let ans = findNthTerm(n - 1) + findNthTerm(n - 2);
  return ans;
};

console.log(findNthTerm(7));