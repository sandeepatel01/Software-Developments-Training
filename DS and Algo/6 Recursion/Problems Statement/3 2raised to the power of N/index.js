// Find 2^N

function findPowofTwo(N) {
  if (N === 0) {
    return 1;
  }

  let ans = 2 * findPowofTwo(N - 1);

  return ans;
};

console.log(findPowofTwo(6));