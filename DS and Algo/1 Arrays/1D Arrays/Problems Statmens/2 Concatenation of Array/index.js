// Concatenation of Array

function getConcatenationofArray(nums) {
  let n = nums.length;
  let ans = [];

  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }

  return ans;
};

console.log(getConcatenationofArray([1, 2, 1]));