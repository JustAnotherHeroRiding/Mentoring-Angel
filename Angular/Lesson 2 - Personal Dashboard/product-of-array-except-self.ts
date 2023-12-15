/* Given an integer array nums, return an array answer such that answer[i] is 
equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation. */

/* Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 
Follow up: Can you solve the problem in O(1) 
extra space complexity? (The output array does not count as extra
     space for space complexity analysis.)
 */

function productExceptSelf(nums: number[]): number[] {
  const result: number[] = Array(nums.length).fill(1);
  const numsLen: number = nums.length;
  const curr: number[] = Array(2).fill(1);
  for (let i: number = 1; i < numsLen; i++) {
    curr[0] *= nums[i - 1];
    curr[1] *= nums[numsLen - i];
    result[i] *= curr[0];
    result[numsLen - i - 1] *= curr[1];
  }
  return result;
}

//Example 1:

let nums = [1, 2, 3, 4];
// Output: [24,12,8,6]

// Example 2:

let nums2 = [-1, 1, 0, -3, 3];
// Output: [0,0,9,0,0]

console.log(productExceptSelf(nums));
