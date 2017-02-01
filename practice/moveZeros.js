// move zeros

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
//
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


var moveZeroes = function(nums) {
    for(var x=0; x<nums.length; x++){
        for(var y=x+1; y<nums.length; y++){
                if(nums[y]===0){
                    continue;
                }
                if(nums[x]===0){
                    var temp = nums[x];
                    nums[x] = nums[y];
                    nums[y] = temp;
                }
        }
    }
};
