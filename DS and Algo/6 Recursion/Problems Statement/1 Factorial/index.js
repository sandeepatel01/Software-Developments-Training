// find factorials of a number

function factofNumber(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let ans = num * factofNumber(num - 1);
  return ans;
};

console.log(factofNumber(5));