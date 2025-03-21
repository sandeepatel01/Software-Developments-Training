// Shuffle(random order) the Array

function shuffle(nums) {
  let n = nums.length / 2; // length of nums = 6/2 = 3
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(nums[i]);  // x values (nums[0], nums[1], nums[2])
    res.push(nums[i + n]); // y values (nums[3], nums[4], nums[5])
  }

  return res;
};

console.log(shuffle([2, 5, 1, 3, 4, 7]));