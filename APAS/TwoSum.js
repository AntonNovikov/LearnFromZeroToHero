// Two Sum (easy)
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums [0] + nums [1] = 9, return [0, 1].


function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (numMap.hasOwnProperty(complement)) {
      console.log(numMap)
      return [numMap[complement], i];
    }

    numMap[num] = i;
  }

  return [];
}

const nums = [2, 7, 11, 15];
const target = 26;
const result = twoSum(nums, target);
console.log(result); 
