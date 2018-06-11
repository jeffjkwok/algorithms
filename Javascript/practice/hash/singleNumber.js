// Single Number

// Given an array of integers, every element appears twice except for one. Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// inital approach
var singleNumber = function(nums){
    for(var idx=0; idx< nums.length; idx++){
        if(nums.indexOf(nums[idx]) == nums.lastIndexOf(nums[idx])){
            return nums[idx]
        }
    }
}

// creates set of numbers then *2 then subtract sum of array 
var singleNumber = function(nums) {
    var mySet = new Set(nums);
    var newNums = Array.from(mySet);
    var sum = newNums.reduce(function(a,b){return a+b})
    return sum*2 - nums.reduce(function(a,b){return a+b})
};
