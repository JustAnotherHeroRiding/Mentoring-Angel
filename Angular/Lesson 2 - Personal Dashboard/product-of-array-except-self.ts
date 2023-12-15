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
  let answer: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    // Check for -0 and convert to 0
    /*   if (Object.is(product, -0)) {
      product = 0;
    } */
    answer[i] = product;
  }

  return answer;
}
//Example 1:

let nums = [1, 2, 3, 4];
// Output: [24,12,8,6]

// Example 2:

let nums2 = [-1, 1, 0, -3, 3];
// Output: [0,0,9,0,0]


console.log(productExceptSelf(nums));
