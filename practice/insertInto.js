// Search and Insert Into

// Given a sorted array and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.
//
// Here are few examples.
// [1,3,5,6], 5 → 2
// [1,3,5,6], 2 → 1
// [1,3,5,6], 7 → 4
// [1,3,5,6], 0 → 0

var searchInsert = function(nums, target) {
    for(var x = 0; x<nums.length; x++){
        if(target <= nums[x]){
            return x
        }
    }
    return nums.length;
};
