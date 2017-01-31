// Third Max Number
// Given a non-empty array of integers, return the third maximum number in this array.
// If it does not exist, return the maximum number. The time complexity must be in O(n).
// -------------------------------------------
// EX:1
// Input: [3, 2, 1]
// Output: 1
// Explanation: The third maximum is 1.
// -------------------------------------------
// EX:2
// Input: [1, 2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// -------------------------------------------
// EX:3
// Input: [2, 2, 3, 1]
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.
// --------------------------------------------

var thirdMax = function(nums) {
    var max1 = nums[0];
    var max2 = nums[0];
    var max3 = nums[0];
    for(var x=0; x<nums.length; x++){
        max1 = Math.max(max1, nums[x]);
        max2 = Math.min(max2, nums[x]);
        max3 = Math.min(max3, nums[x])
    }
    for(var x=0; x<nums.length; x++){
        if( nums[x] > max2 && nums[x] < max1){
            max2 = nums[x];
        }
    }
    for(var x=0; x<nums.length; x++){
         if( nums[x] > max3 && nums[x] < max2){
            max3 = nums[x];
        }
    }
    console.log(max1,max2,max3)
    if(nums.length<3 || max2 == max3){
        return max1
    }
    return max3
};
