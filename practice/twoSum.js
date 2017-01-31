// TwoSum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(nums, target){
  var dict = {};
  var final=[];
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
