Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Input 1: nums = [1,2,1]
Output 1: [1,2,1,1,2,1]
Explanation 1: The array ans is formed as follows:

- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

Input 2: nums = [1,3,2,1]
Output 2: [1,3,2,1,1,3,2,1]

Constraints:
1 <= nums.length <= 1000
1 <= nums[i] <= 103
