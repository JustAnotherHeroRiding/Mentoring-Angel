/* Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 
Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size. */

function topKFrequent(nums: number[], k: number): number[] {
  let count: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]] += 1;
    } else {
      count[nums[i]] = 1;
    }
  }
  let result: number[] = [];
  for (let i = 0; i < k; i++) {
    let max = 0;
    let maxKey = 0;
    for (let key in count) {
      if (count[key] > max) {
        max = count[key];
        maxKey = Number(key);
      }
    }
    result.push(maxKey);
    delete count[maxKey];
  }

  return result;
}

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

console.log(topKFrequent(nums, k));
