// Max Consecutive Ones
//
// Given a binary array, find the maximum number of consecutive 1s in this array.
// EX:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

var findMaxConsecutiveOnes = function(nums) {
    var count = 0, maxConsec = 0;
    for(var idx=0; idx<nums.length; idx++){
        if(nums[idx] === 0){
            count = 0;
        } else {
            count++;
        }
       maxConsec = Math.max(maxConsec, count)
    }
    return maxConsec
};
