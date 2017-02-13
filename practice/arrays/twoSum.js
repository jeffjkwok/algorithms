// TwoSum
// -----------
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(nums, target){
  var dict = {};
  for(var x=0; x<nums.length; x++){
    dict[target - nums[x]] = nums.indexOf(nums[x]);
    if( nums[x] in dict){
        if( dict[nums[x]] != nums.lastIndexOf(nums[x])){
            return [ dict[nums[x]], nums.lastIndexOf(nums[x]) ];
        }
    }
  }
  return false;
}

var nums = [3,3]
var target = 6

console.log(twoSum(nums, target))

// TwoSum Pt 2
// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
// Please note that your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
//
// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2

var twoSum = function(numbers, target) {
    var dict = {};
    for(var idx=0; idx<numbers.length; idx ++){
        if(!(target-numbers[idx] in dict)){
            dict[target - numbers[idx]] = idx;
        } else {
            if(dict[numbers[idx]] < numbers.lastIndexOf(numbers[idx])){
                return [dict[numbers[idx]]+1, numbers.lastIndexOf(numbers[idx])+1]
            }
        }
    }
    console.log(dict)
};
