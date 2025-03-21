// Running Sum of 1d Array

function runningSum(nums) {
  let n = nums.length;
  let runningSumofArr = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      runningSumofArr[i] = nums[i];
    } else {
      runningSumofArr[i] = runningSumofArr[i - 1] + nums[i];
    }
  }

  return runningSumofArr;
};

console.log(runningSum([1, 2, 3, 4]));