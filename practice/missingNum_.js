// missingNumber

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
//
// For example,
// Given nums = [0, 1, 3] return 2.
//
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?



var missingNumber = function(nums) {
    var sum = nums.reduce(function(a, b) {
        return a + b;
    });
    return ( ( 1+nums.length )*nums.length )/2 -sum;
};
