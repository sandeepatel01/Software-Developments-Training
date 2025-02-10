// Build Array from Permutation

function buildArray(nums) {
  let ans = [];
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    ans.push(nums[nums[i]]);
  }

  return ans;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));