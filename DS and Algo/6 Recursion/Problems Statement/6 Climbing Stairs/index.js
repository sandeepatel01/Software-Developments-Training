// Climbing Stairs

function climbStairs(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let totalWays = climbStairs(n - 1) + climbStairs(n - 2);
  return totalWays;
};

console.log(climbStairs(2));